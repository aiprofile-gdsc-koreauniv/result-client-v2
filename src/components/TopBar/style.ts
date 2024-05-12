import styled from "styled-components";
import { BLACK } from "../../util";

export const StyledTopBarWrapper = styled.div`
  height: 6vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${BLACK};
  color: white;
  padding: 10px;
  font-size: 15px;
`;
export const StyledTitle = styled.span`
  flex: 1;
  text-align: center;
`;
