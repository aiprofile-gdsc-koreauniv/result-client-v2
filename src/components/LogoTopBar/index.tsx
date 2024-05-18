import { useNavigate } from "react-router-dom";
import { StyledLogoTopBarWrapper } from "./style";

export const LogoTopBar = () => {
  const navigate = useNavigate();
  return (
    <StyledLogoTopBarWrapper onClick={() => navigate("/")}>
      <img src="/logo/Tiger.svg" alt="tiger" />
      호랑이 사진관
    </StyledLogoTopBarWrapper>
  );
};
