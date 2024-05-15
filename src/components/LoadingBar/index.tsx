import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { StyledLoadingBarWrapper } from "./style";
export const LoadingBar = () => {
  return (
    <StyledLoadingBarWrapper>
      요청하신 이미지 생성 대기중입니다
      <Spin indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />} />
    </StyledLoadingBarWrapper>
  );
};
