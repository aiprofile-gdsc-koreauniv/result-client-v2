import styled from "styled-components";
import Lottie from "react-lottie-player";
export const StyledProjectsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 15px;
  row-gap: 20px;
  place-items: center;
`;
export const StyledTitle = styled.div`
  font-size: 20px;
  padding: 30px 7vw;
`;
export const Info = styled.div`
  color: darkslatelightgrey;
  padding: 0px 7vw;
  font-size: 14px;
`;
export const InfoText = styled.span`
  margin-left: 5px;
`;
export const GoToHomeBtn = styled.div`
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
  background: white;
  border: 1px solid rgba(0, 0, 0, 0.1);
  color: darkslatelightgrey;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 24px */
  letter-spacing: -0.304px;
  margin-bottom: 15px;
`;

export const CustomLottie = styled(Lottie)`
  width: 50px;

  margin-top: 30px;
`;
export const LottieWrapper = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  align-items: center;
`;
