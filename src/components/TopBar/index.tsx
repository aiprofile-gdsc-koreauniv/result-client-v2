import { ArrowLeftOutlined, CloseOutlined } from "@ant-design/icons";
import { TopBarProps } from "./type";
import { StyledTitle, StyledTopBarWrapper } from "./style";
import { useNavigate } from "react-router-dom";

export const TopBar = ({
  title,
  iconType,
  style,
  iconPosition,
}: TopBarProps) => {
  const navigate = useNavigate();
  return iconPosition === "right" ? (
    <StyledTopBarWrapper style={style}>
      <StyledTitle> {title}</StyledTitle>
      {iconType === "arrow" ? (
        <ArrowLeftOutlined
          style={{ marginLeft: "10px" }}
          onClick={() => navigate(-1)}
        />
      ) : (
        <CloseOutlined
          style={{ marginLeft: "10px" }}
          onClick={() => navigate(-1)}
        />
      )}
    </StyledTopBarWrapper>
  ) : (
    <StyledTopBarWrapper style={style}>
      {iconType === "arrow" ? (
        <ArrowLeftOutlined
          style={{ marginLeft: "10px" }}
          onClick={() => navigate(-1)}
        />
      ) : (
        <CloseOutlined
          style={{ marginLeft: "10px" }}
          onClick={() => navigate(-1)}
        />
      )}
      <StyledTitle> {title}</StyledTitle>
    </StyledTopBarWrapper>
  );
};
