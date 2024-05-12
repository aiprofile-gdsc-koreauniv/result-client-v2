import styled from "styled-components";
import { CardWrapperProps } from "./type";

export const StyledCardWrapper = styled.div<CardWrapperProps>`
  position: relative;
  width: 45vw;
  height: 80vw;
  border-radius: 10px;
  background-image: url(${(props) => props.imgUrl});
  background-size: cover;
  background-position: center;
  border: 1px solid #ccc;
  cursor: pointer;
  overflow: hidden;
  box-sizing: border-box;
  display: flex;
  gap: 10px;
  flex-direction: column;
  justify-content: flex-end;
  font-size: 3vw;
`;

export const CompleteCardTextWrapper = styled.div`
  padding: 20% 5%;
  z-index: 1;
  font-family: SB_light;
`;
export const ImageOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  &:hover {
    background-color: rgba(0, 0, 0, 0.5);
  }
`;
