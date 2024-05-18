import { LottieWrapper, CustomLottie } from "./style";
import animationData from "../../assets/lottie/loading.json";
export const SmallLottie = () => {
  return (
    <LottieWrapper>
      <CustomLottie animationData={animationData} play loop />
      <img src="/logo/Tiger.svg" />
      <div>사진을 가져오고 있습니다</div>
    </LottieWrapper>
  );
};
