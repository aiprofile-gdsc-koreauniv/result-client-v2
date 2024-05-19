import {
  CompleteCard,
  CustomFooter,
  ErrorCard,
  LoadingBar,
  LogoTopBar,
  PendingCard,
  ProfileBar,
  SmallLottie,
} from "../../components";
import { InfoCircleOutlined, RightOutlined } from "@ant-design/icons";
import animationData from "../../assets/lottie/loading.json";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { ProjectId, userInfo } from "../../recoil";
import { useEffect, useState } from "react";
import { useAllProjects } from "../../api";
import {
  GoToHomeBtn,
  Info,
  InfoText,
  StyledProjectsWrapper,
  StyledTitle,
} from "./style";

import { useRecoilState } from "recoil";

export const MyPage = () => {
  const navigate = useNavigate();
  const [completedProjects, setCompletedProjects] = useState<any>();
  const [pendingProjects, setPendingProjects] = useState<any>();
  const [errorProjects, setErrorProjects] = useState<any>();
  const [selectedProjectId, setSelectedProjectId] = useRecoilState(ProjectId);
  const user = useRecoilValue(userInfo);

  const { data, isLoading } = useAllProjects();

  function extractNumberFromTitle(title: string): number {
    const regex = /#(\d+)/;
    const match = title.match(regex);
    return match ? +match[1] : 0;
  }

  useEffect(() => {
    if (!user.email) navigate("/");
  }, [user]);
  useEffect(() => {
    if (data) {
      const sortedCompletedProjects = [...data.completed].sort((a, b) => {
        const dateA = new Date(a.requestedAt).getTime();
        const dateB = new Date(b.requestedAt).getTime();
        return dateB - dateA;
      });
      console.log(sortedCompletedProjects);
      setCompletedProjects(sortedCompletedProjects);
      setPendingProjects(data.pending);
      setErrorProjects(data.error);
    }
  }, [data]);
  if (isLoading) return <SmallLottie />;
  return (
    <div style={{ width: "100%" }}>
      <LogoTopBar />
      {/* <ProfileBar name={user.name} email={user.email} imgUrl={user.imgUrl} /> */}
      <StyledTitle>내 갤러리</StyledTitle>
      <Info>
        <InfoCircleOutlined />
        <InfoText>AI 특성상 얼굴이 깨질 수 있으니 조심하세요</InfoText>
      </Info>
      <StyledProjectsWrapper>
        {completedProjects?.map((project: any) => (
          <CompleteCard
            index={extractNumberFromTitle(project.title)}
            imgUrl={project.thumbnailUrl}
            date={project.requestedAt}
            onClick={() => {
              setSelectedProjectId(extractNumberFromTitle(project.title));
              navigate(`/mypage/${project.id}`);
            }}
          />
        ))}
        {pendingProjects?.map((project: any) => (
          <PendingCard index={extractNumberFromTitle(project.title)} />
        ))}
        {errorProjects?.map((project: any, index: number) => (
          <ErrorCard />
        ))}
      </StyledProjectsWrapper>
      <GoToHomeBtn onClick={() => window.open("https://horangstudio.com/")}>
        프로필 사진 새로 만들기 <RightOutlined />
      </GoToHomeBtn>
      {/* {pendingProjects?.length > 0 ? <LoadingBar /> : <></>} */}
      <CustomFooter />
    </div>
  );
};
