import styled from "styled-components";
import { BLACK } from "../../util";

export const StyledLoadingBarWrapper = styled.div`
  height: 3em;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 7px;
  background-color: ${BLACK};
  opacity: 90%;
  color: white;
  position: sticky;
  bottom: 0;
  width: 100vw;
`;
