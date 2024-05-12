import styled from "styled-components";
import { DARK_RED } from "../../util";
import Slider from "react-slick";

export const StyledMainPageWrapper = styled.div`
  background: linear-gradient(${DARK_RED} 10%, white, transparent);
  min-height: 100vh;
  width: 100%;
  max-width: 440px;
  position: relative;
`;
export const OverlayContainer = styled.div`
  position: relative;
`;
export const WhiteOverlay = styled.div`
  position: absolute;
  top: 48%;
  left: 0;
  width: 100%;
  height: 53%;
  background: linear-gradient(to bottom, transparent 0%, white 100%);
  z-index: 1;
`;
export const GdscText = styled.div`
  color: lightgray;
  text-align: center;
  font-size: 10px;
  padding: 10px;
  margin-top: 13px;
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
  margin-top: 50px;
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
  padding-bottom: 30px;
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 1) 100%
  );
`;
export const Bg = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #f0f0f0;
`;
