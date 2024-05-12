import { StyledCardWrapper } from "./style";
import { PendingCardProps } from "./type";

export const PendingCard = ({ index }: PendingCardProps) => {
  return (
    <StyledCardWrapper>
      <div style={{ color: "#FFC3C6", fontSize: "0.7em" }}>
        2024 석탑대동제 #{index}
      </div>
      <div style={{ color: "white", fontSize: "1em" }}>이미지 생성 중</div>
      <div style={{ color: "gray", fontSize: "0.7em" }}>약 20분 남음</div>
    </StyledCardWrapper>
  );
};
