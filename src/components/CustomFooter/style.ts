import styled from "styled-components";

export const Footer = styled.div`
  width: 100%;
  height: 246px;
  flex-shrink: 0;
  background: var(--light-grey, #ededed);
  display: flex;
  flex-direction: column;
  gap: 3px;
  color: var(--grey2, #9f9f9f);
  font-family: Pretendard;
`;
export const FooterContact = styled.div`
  margin-top: 24px;
  margin-left: 31px;
`;
export const FooterContactTitle = styled.p`
  /* pretendard sb 16 */
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  padding: 10px 0px;
  letter-spacing: -0.304px;
  color: gray;
`;
export const FooterContactRow = styled.div`
  display: flex;
  height: 25px;
`;
export const FooterContactType = styled.p`
  width: 61px;

  /* pretendard md 12 */
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 18px */
  letter-spacing: -0.228px;
`;
export const FooterContactText = styled.p`
  /* pretendard md 12 */
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 18px */
  letter-spacing: -0.228px;
`;
export const FooterText = styled.div`
  color: var(--grey2, #9f9f9f);
  /* Pretendard md 14 */
  font-family: Pretendard;
  font-size: 12px;
  line-height: 150%;

  padding: 10px 0px;
`;
export const FooterUniversityText = styled.div`
  font-size: 10px;
  color: gray;
  margin-left: 10px;
`;
export const FooterLink = styled.a`
  color: var(--grey2, #9f9f9f);
  text-decoration: none;
`;
export const FooterLogo = styled.img`
  margin-top: 8px;
  margin-left: 31px;
  width: 162px;
  height: 27px;
`;
