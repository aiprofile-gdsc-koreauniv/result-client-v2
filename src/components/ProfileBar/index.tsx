import { Avatar } from "antd";
import { StyledProfileBarWrapper, StyledTextContainer } from "./style";
import { ProfileBarProps } from "./type";
import { RightOutlined } from "@ant-design/icons";
export const ProfileBar = ({ name, email, imgUrl }: ProfileBarProps) => {
  return (
    <StyledProfileBarWrapper>
      <Avatar size={45} src={imgUrl} style={{ fontFamily: "SB_medium" }}>
        {name}
      </Avatar>
      <StyledTextContainer>
        <div style={{ fontSize: 20 }}>{name}</div>
        <div style={{ fontSize: 14, color: "gray" }}>{email}</div>
      </StyledTextContainer>
      {/* <RightOutlined
        style={{ marginLeft: "auto", color: "gray", cursor: "pointer" }}
      /> */}
    </StyledProfileBarWrapper>
  );
};
