import { useNavigate, useParams } from "react-router-dom";
import { CustomButton, TopBar } from "../../components";
import {
  CheckOriginalText,
  DownloadText,
  GdscText,
  ImagesWrapper,
  StatusText,
  StyledDetailPageWrapper,
  StyledImage,
} from "./style";
import { RightOutlined } from "@ant-design/icons";
import { useSingleProject } from "../../api";
import { ImageIndex, ProjectId } from "../../recoil";
import { useRecoilState, useRecoilValue } from "recoil";
import JSZip from "jszip";
export const DetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, isLoading, isError } = useSingleProject(id ?? "");

  const [selectedImage, setSelectedImage] = useRecoilState(ImageIndex);
  const projectId = useRecoilValue(ProjectId);
  const title = `2024 석탑대동제 #${projectId}`;

  const onClickDownload = async () => {
    const imgURLs = data?.imageUrls; // 이미지 URL 가져오기
    const zip = new JSZip();

    if (!imgURLs || imgURLs.length === 0) {
      console.error("No image URLs found.");
      return;
    }

    try {
      await Promise.all(
        imgURLs.map(async (imgURL: string, index: number) => {
          const response = await fetch(imgURL);
          const blob = await response.blob();
          zip.file(`image${index + 1}.jpg`, blob);
        })
      );

      const zipBlob = await zip.generateAsync({ type: "blob" });

      const url = window.URL.createObjectURL(zipBlob);
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "images.zip"); // Specify the file name for the zip file
      document.body.appendChild(link);
      link.click();
      if (link.parentNode) {
        link.parentNode.removeChild(link);
      }
    } catch (error) {
      console.error("Error downloading images:", error);
    }
  };

  if (isLoading) return <StatusText>이미지를 가져오고 있습니다</StatusText>;
  if (isError)
    return (
      <StatusText>오류가 발생했습니다. 담당자에게 문의해주세요</StatusText>
    );

  return (
    <>
      <StyledDetailPageWrapper>
        <TopBar title={title} iconType="arrow" />
        <ImagesWrapper>
          {data?.imageUrls.map((imageUrl: string, index: number) => {
            return (
              <StyledImage
                src={imageUrl}
                onClick={() => {
                  setSelectedImage(index);
                  navigate(`/mypage/${id}/save`);
                }}
              />
            );
          })}
        </ImagesWrapper>

        <DownloadText>마음에 드는 프로필을 선택해 다운받으세요!</DownloadText>

        <CheckOriginalText onClick={() => navigate(`/mypage/${id}/original`)}>
          원본 이미지 확인하기
          <RightOutlined />
        </CheckOriginalText>
        <GdscText>@GDSC Korea University</GdscText>
      </StyledDetailPageWrapper>

      <CustomButton
        textColor="white"
        bgColor="red"
        style={{
          width: "90vw",
          fontsize: "16px",
          margin: "0 auto",
          height: "40px",
          position: "sticky",
          bottom: "50px",
        }}
        onClick={() => onClickDownload()}
      >
        모두 저장하기
      </CustomButton>
    </>
  );
};
