import { LottieWrapper, CustomLottie, Subtext, MainText } from "./style";
import animationData from "../../assets/lottie/loading.json";
export const SmallLottie = () => {
  return (
    <LottieWrapper>
      <CustomLottie animationData={animationData} play loop />
      <img src="/logo/Lottie.svg" />
      <MainText>사진을 가져오고 있습니다</MainText>
      <Subtext>잠시만 기다려주세요</Subtext>
    </LottieWrapper>
  );
};
