import {
  CompleteCard,
  CustomFooter,
  ErrorCard,
  LoadingBar,
  LogoTopBar,
  PendingCard,
  ProfileBar,
} from "../../components";
import { InfoCircleOutlined, RightOutlined } from "@ant-design/icons";
import animationData from "../../assets/lottie/loading.json";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { ProjectId, userInfo } from "../../recoil";
import { useEffect, useState } from "react";
import { useAllProjects } from "../../api";
import {
  CustomLottie,
  GoToHomeBtn,
  Info,
  InfoText,
  LottieWrapper,
  StyledProjectsWrapper,
  StyledTitle,
} from "./style";

import { useRecoilState } from "recoil";
import Lottie from "react-lottie-player";

export const MyPage = () => {
  const navigate = useNavigate();
  const [completedProjects, setCompletedProjects] = useState<any>();
  const [pendingProjects, setPendingProjects] = useState<any>();
  const [errorProjects, setErrorProjects] = useState<any>();
  const [selectedProjectId, setSelectedProjectId] = useRecoilState(ProjectId);
  const user = useRecoilValue(userInfo);

  const { data, isLoading } = useAllProjects();

  useEffect(() => {
    if (!user.email) navigate("/");
  }, [user]);
  useEffect(() => {
    if (data) {
      setCompletedProjects(data.completed);
      setPendingProjects(data.pending);
      setErrorProjects(data.error);
    }
  }, [data]);

  return (
    <div style={{ width: "100%" }}>
      <LogoTopBar />
      {/* <ProfileBar name={user.name} email={user.email} imgUrl={user.imgUrl} /> */}
      <StyledTitle>내 갤러리</StyledTitle>
      <Info>
        <InfoCircleOutlined />
        <InfoText>AI 특성상 얼굴이 깨질 수 있으니 조심하세요</InfoText>
      </Info>
      {isLoading && (
        <LottieWrapper>
          <CustomLottie animationData={animationData} play loop />
          <img src="/logo/Tiger.svg" />
          <div>사진 가져오는 중입니다</div>
        </LottieWrapper>
      )}
      <StyledProjectsWrapper>
        {completedProjects?.map((project: any, index: number) => (
          <CompleteCard
            index={index + 1}
            imgUrl={project.thumbnailUrl}
            date={project.requestedAt}
            onClick={() => {
              setSelectedProjectId(index + 1);
              navigate(`/mypage/${project.id}`);
            }}
          />
        ))}
        {pendingProjects?.map((project: any, index: number) => (
          <PendingCard index={index + 1} />
        ))}
        {errorProjects?.map((project: any, index: number) => (
          <ErrorCard />
        ))}
      </StyledProjectsWrapper>
      <GoToHomeBtn onClick={() => window.open("https://horangstudio.com/")}>
        프로필 사진 새로 만들기 <RightOutlined />
      </GoToHomeBtn>
      {pendingProjects?.length > 0 ? <LoadingBar /> : <></>}
      <CustomFooter />
    </div>
  );
};
