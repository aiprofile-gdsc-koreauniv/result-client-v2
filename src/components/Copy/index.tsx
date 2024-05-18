import { CopyDiv, CopyText } from "./style";
import { CheckCircleFilled } from "@ant-design/icons";
export const Copy = () => {
  return (
    <CopyDiv initial={{ y: 12, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
      <CopyText>
        링크를 복사했어요!
        <CheckCircleFilled />
      </CopyText>
    </CopyDiv>
  );
};
