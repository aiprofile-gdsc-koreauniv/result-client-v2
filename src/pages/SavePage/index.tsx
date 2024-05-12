import { useParams } from "react-router-dom";
import { CustomButton, TopBar } from "../../components";
import { ButtonsContainer, StyledImage, StyledSavePageWrapper } from "./style";
import { easeInOut, motion } from "framer-motion";
import { useSingleProject } from "../../api";
import { StatusText } from "../DetailPage/style";
import { useRecoilState } from "recoil";
import { ImageIndex } from "../../recoil";
import Slider from "react-slick";
import { Bg } from "../MainPage/style";
import { useEffect, useMemo, useState } from "react";

export const SavePage = () => {
  const { id } = useParams();
  const { data, isLoading, isError } = useSingleProject(id ?? "");
  const [initialImageIdx, setInitialImageIndex] = useRecoilState(ImageIndex);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedImageUrl, setSelectedImageUrl] = useState("");

  useEffect(() => {
    if (!initialImageIdx || !data?.imageUrls) return;
    if (initialImageIdx !== -1) {
      setCurrentSlide(initialImageIdx);
    }
  }, [data?.imageUrls]);

  const handleSlideChange = (currentSlide: number) => {
    setCurrentSlide(currentSlide);
    setSelectedImageUrl(data?.imageUrls[currentSlide]);
  };

  const onClickDownload = async () => {
    try {
      const imgURL = data?.imageUrls[currentSlide]; // 이미지 URL 가져오기

      const response = await fetch(imgURL);
      const blob = await response.blob();

      const url = window.URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "사진.jpg");
      document.body.appendChild(link);
      link.click();
      if (link.parentNode) {
        link.parentNode.removeChild(link);
      }
    } catch (error) {
      console.error("Error downloading image:", error);
    }
  };

  const customPaging = useMemo(
    () =>
      function (i: any) {
        const ImageSrc = data?.imageUrls[i];
        return (
          <div style={{ width: "100%", padding: "10px" }}>
            <a>
              <img
                src={ImageSrc}
                style={{
                  height: "10vh",
                  borderRadius: "3px",
                  filter: currentSlide === i ? "none" : "brightness(20%)",
                }}
              />
            </a>
          </div>
        );
      },
    [data?.imageUrls, currentSlide]
  );
  const settings = {
    customPaging,
    infinite: true,
    speed: 500,
    dotsClass: "slick-dots slick-thumb",
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: initialImageIdx,
    afterChange: handleSlideChange,
  };

  if (isLoading) return <StatusText>이미지를 가져오고 있습니다</StatusText>;
  if (isError)
    return (
      <StatusText>오류가 발생했습니다. 담당자에게 문의해주세요</StatusText>
    );
  return (
    <Bg>
      <StyledSavePageWrapper>
        <motion.div
          initial={{ y: 24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.3, ease: easeInOut }}
        >
          <TopBar iconType="close" title="이미지 저장" />
          <div className="slider-container">
            <Slider {...settings}>
              {data?.imageUrls.map((imageUrl: string) => {
                return (
                  <div>
                    <StyledImage src={imageUrl} alt="이미지" />
                  </div>
                );
              })}
            </Slider>
          </div>

          <ButtonsContainer>
            <CustomButton
              textColor="white"
              bgColor="gray"
              style={{ width: "40vw", fontSize: "17px" }}
            >
              공유하기
            </CustomButton>
            <CustomButton
              textColor="black"
              bgColor="white"
              style={{ width: "40vw", fontSize: "17px" }}
              onClick={() => onClickDownload()}
            >
              저장하기
            </CustomButton>
          </ButtonsContainer>
        </motion.div>
      </StyledSavePageWrapper>
    </Bg>
  );
};
