import {
  CompleteCardTextWrapper,
  ImageOverlay,
  StyledCardWrapper,
} from "./style";
import { CompleteCardProps } from "./type";

export const CompleteCard = ({
  index,
  date,
  imgUrl,
  onClick,
}: CompleteCardProps) => {
  return (
    <StyledCardWrapper imgUrl={imgUrl} onClick={onClick}>
      <ImageOverlay />
      <CompleteCardTextWrapper>
        <div style={{ color: "#FFC3C6", fontSize: "1em" }}>생성 완료</div>
        <div style={{ color: "white", fontSize: "1.4em", padding: "5px 0" }}>
          <div>2024 석탑대동제</div>
          <div>#{index}</div>
        </div>
        <div style={{ color: "gray", fontSize: "1em" }}>{date}</div>
      </CompleteCardTextWrapper>
    </StyledCardWrapper>
  );
};
