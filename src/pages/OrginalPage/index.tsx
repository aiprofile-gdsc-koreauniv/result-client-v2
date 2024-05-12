import { easeInOut, motion } from "framer-motion";
import { StyledImagesWrapper, StyledOriginalPageWrapper } from "./style";
import { TopBar } from "../../components";
export const OriginalPage = () => {
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
          <div></div>
        </StyledImagesWrapper>
      </motion.div>
    </StyledOriginalPageWrapper>
  );
};
