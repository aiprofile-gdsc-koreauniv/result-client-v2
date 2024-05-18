import { easeInOut, motion } from "framer-motion";
import {
  StyledImagesWrapper,
  StyledOriginalImg,
  StyledOriginalPageWrapper,
} from "./style";
import { TopBar } from "../../components";
import { useRecoilState } from "recoil";
import { OriginalImages } from "../../recoil";
export const OriginalPage = () => {
  const [originalImages, setOriginalImages] = useRecoilState(OriginalImages);
  return (
    <StyledOriginalPageWrapper>
      <motion.div
        initial={{ y: 24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.3, ease: easeInOut }}
      >
        <TopBar
          title={"사용된 원본 이미지"}
          iconType={"close"}
          iconPosition="right"
        />
        <StyledImagesWrapper>
          {originalImages.map((imageUrl, index) => (
            <StyledOriginalImg
              key={index}
              src={imageUrl}
              alt={`Image ${index}`}
            />
          ))}
        </StyledImagesWrapper>
      </motion.div>
    </StyledOriginalPageWrapper>
  );
};
