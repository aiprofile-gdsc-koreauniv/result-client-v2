import { StyledCardWrapper } from "./style";
import { RedoOutlined } from "@ant-design/icons";
export const ErrorCard = () => {
  return (
    <StyledCardWrapper onClick={() => window.open("https://horangstudio.com/")}>
      <RedoOutlined style={{ fontSize: "50px", color: "gray" }} />
      <div style={{ color: "gray", fontSize: "0.7em" }}>에러 발생</div>
      <div style={{ color: "white", fontSize: "0.9em" }}>
        <div>이미지를 다시</div>
        <div>업로드 해주세요</div>
      </div>
    </StyledCardWrapper>
  );
};
