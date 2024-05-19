import { easeInOut, motion } from "framer-motion";
import {
  OriginalTitleText,
  StyledImagesWrapper,
  StyledOriginalImg,
  StyledOriginalPageWrapper,
} from "./style";
import { TopBar } from "../../components";
import { useRecoilState } from "recoil";
import { OriginalImages } from "../../recoil";
import { Tooltip } from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";
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
          title={
            <OriginalTitleText>
              사용된 원본 이미지
              <Tooltip
                title={
                  "원본 이미지는 개인정보처리방침에 따라 이벤트 종료 후 바로 삭제됩니다. 또한 철저한 보안절차를 통해 안전하게 보관됩니다."
                }
              >
                <InfoCircleOutlined />
              </Tooltip>
            </OriginalTitleText>
          }
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
