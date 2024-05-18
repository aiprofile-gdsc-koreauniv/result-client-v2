import styled from "styled-components";

export const StyledSavePageWrapper = styled.div`
  background-color: black;
  min-height: 100vh;
  width: 100%;
  min-width: 390px;
  max-width: 440px;
  position: relative;
`;
export const MainImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;
export const StyledImage = styled.img`
  height: 80vh;
  cursor: pointer;
  border-radius: 10px;
  margin: 0 auto;
`;
export const ImagesContainer = styled.div`
  display: flex;
  gap: 10px;
  overflow-x: auto;
  padding: 40px 30px;
`;
export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  position: absolute;
  bottom: 12%;
  width: 85%;
  left: 5%;
`;
export const StyledPaging = styled.a``;
