import styled from "styled-components";

export const StyledDetailPageWrapper = styled.div`
  background-color: black;
  min-height: 100vh;
`;
export const CheckOriginalText = styled.div`
  color: gray;
  text-align: center;
  cursor: pointer;
  padding: 15px;
  margin-bottom: 30px;
`;
export const GdscText = styled.div`
  color: gray;
  text-align: center;
  padding: 10px;
  font-size: 10px;
`;
export const DownloadText = styled.div`
  color: antiquewhite;
  text-align: center;
  padding: 10px;
  position: sticky;
  bottom: 0px;
  height: 108px;
  font-size: 15px;
  background: linear-gradient(to top, black 51%, transparent);
`;
export const StatusText = styled.div`
  text-align: center;
`;
export const StyledImage = styled.img`
  width: 45vw;
  height: 80vw;
  cursor: pointer;
  border-radius: 10px;
`;
export const ImagesWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 5px;
  row-gap: 20px;
  place-items: center;
  padding-top: 40px;
`;
