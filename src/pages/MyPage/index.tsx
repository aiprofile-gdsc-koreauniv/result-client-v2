import {
  CompleteCard,
  CustomFooter,
  ErrorCard,
  LoadingBar,
  LogoTopBar,
  PendingCard,
  ProfileBar,
} from "../../components";
import { InfoCircleOutlined } from "@ant-design/icons";

import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { ProjectId, userInfo } from "../../recoil";
import { useEffect, useState } from "react";
import { useAllProjects } from "../../api";
import { Info, StyledProjectsWrapper, StyledTitle } from "./style";

import { useRecoilState } from "recoil";

export const MyPage = () => {
  const navigate = useNavigate();
  const [completedProjects, setCompletedProjects] = useState<any>();
  const [pendingProjects, setPendingProjects] = useState<any>();
  const [errorProjects, setErrorProjects] = useState<any>();
  const [selectedProjectId, setSelectedProjectId] = useRecoilState(ProjectId);
  const user = useRecoilValue(userInfo);

  const { data } = useAllProjects();

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
    <div>
      <LogoTopBar />
      <ProfileBar name={user.name} email={user.email} imgUrl={user.imgUrl} />
      <StyledTitle>내 갤러리</StyledTitle>
      <Info>
        <InfoCircleOutlined />
        AI 특성상 얼굴이 깨질 수 있으니 조심하세요
      </Info>
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
      {pendingProjects ? <LoadingBar /> : <></>}
      <CustomFooter />
    </div>
  );
};
