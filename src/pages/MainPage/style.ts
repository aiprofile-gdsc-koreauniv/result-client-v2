import styled from "styled-components";
import { DARK_RED } from "../../util";
import Slider from "react-slick";

export const StyledMainPageWrapper = styled.div`
  background: ${DARK_RED};
  min-height: 60vh;
  width: 100%;
  max-width: 440px;
  position: relative;
`;
export const OverlayContainer = styled.div`
  position: relative;
`;
export const WhiteOverlay = styled.div`
  position: absolute;
  top: 70%;
  left: 0;
  width: 100%;
  height: 30%;
  background: linear-gradient(to bottom, transparent 0%, white 61%);
  z-index: 1;
`;
export const GdscText = styled.div`
  color: lightgray;
  font-size: 10px;
  margin-top: 10px;
`;
export const TextButtonWrapper = styled.div``;
export const GoogleLogin = styled.span`
  margin-left: 10px;
  font-size: 15px;
`;

export const SliderItem = styled.div`
  margin-left: 20px;
`;

export const HorangStudioLogoAndTitle = styled.div`
  display: flex;
  gap: 15px;
  padding: 0px 5px;
  width: 100%;
  margin-top: 10px;
  justify-content: center;
  position: absolute;
  letter-spacing: 0.5px;
  bottom: 3%;
  z-index: 999;
`;
export const HorangStudioTextWrapper = styled.div``;
export const HorangStudioTitle = styled.div`
  font-size: 38px;
  font-family: SB_medium;
`;
export const HorangeStudioDesc = styled.div`
  font-size: 13px;
  font-family: SB_light;
`;
export const CustomSlider = styled(Slider)`
  width: 100%;
  max-width: 440px;
`;
export const SlideWrapper = styled.div`
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
`;
export const Slide = styled.img`
  display: flex;
  width: 100%;
  object-fit: cover;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
`;
export const Bg = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #f0f0f0;
`;
export const Continue = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 40vh;

  padding: 0px 15px;
`;
export const ContinueBtn = styled.div`
  cursor: pointer;
  display: flex;
  width: calc(100% - 64px);
  margin-left: 16px;
  padding: 18px 16px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
  border-radius: 12px;
  background: var(--red, #d81921);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.1);
  color: var(--white, #fff);
  font-family: Roboto;
  font-size: 17px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 24px */
  letter-spacing: -0.304px;
`;
export const GoToResultBtn = styled.div`
  cursor: pointer;
  display: flex;
  margin-top: 10px;
  width: calc(100% - 64px);
  margin-left: 16px;
  padding: 18px 16px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  font-weight: 500;
  flex-shrink: 0;
  border-radius: 12px;
  background: #fbe8e9;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.1);
  color: var(--red, #d81921);
  font-family: Roboto;
  font-size: 17px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 24px */
  letter-spacing: -0.304px;
`;
export const ResultBtnText = styled.p`
  font-family: Roboto;
  font-size: 17px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 24px */
  letter-spacing: -0.304px;
`;
export const Logout = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 30px 0px;
`;
export const BtnIcon = styled.img`
  width: 23px;
  height: 23px;
`;
export const DetailText = styled.a`
  cursor: pointer;
  margin-left: 10px;
  color: lightgrey;
  text-decoration: underline;
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 18px */
  letter-spacing: -0.228px;
`;
export const GoogleBtn = styled.div`
  cursor: pointer;
  display: flex;
  width: calc(100% - 64px);
  margin-left: 16px;
  padding: 18px 16px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
  border-radius: 12px;
  background: #f3f4f6;
  font-weight: bold;
`;
export const GoogleBtnText = styled.p`
  color: var(--black, #212121);
  font-family: Roboto;
  font-size: 17px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 24px */
  letter-spacing: -0.304px;
`;
