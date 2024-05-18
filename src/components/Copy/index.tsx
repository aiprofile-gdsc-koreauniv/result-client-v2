import { CopyDiv, CopyText } from "./style";
import { CheckCircleFilled } from "@ant-design/icons";
export const Copy = ({ text }: { text: string }) => {
  return (
    <CopyDiv
      initial={{ y: 3, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeInOut" }}
    >
      <CopyText>
        {text}
        <CheckCircleFilled />
      </CopyText>
    </CopyDiv>
  );
};
