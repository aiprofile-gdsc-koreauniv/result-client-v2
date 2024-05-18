import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fff;
  max-width: 440px;
`;
export const Top = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 12px;
`;
export const Left = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-left: 16px;
`;
export const Logo = styled.img`
  width: 24px;
  height: 24px;
`;
export const Text = styled.p`
  color: var(--black, #212121);

  /* aggro sb 16 */
  font-family: SB Aggro;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
export const Question = styled.img`
  width: 109.405px;
  height: 92px;
  margin-top: 171px;
`;
export const Title = styled.p`
  color: var(--black, #212121);

  /* pretendard bold 24 */
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 36px */
  letter-spacing: -0.456px;
  margin-top: 20px;
`;
export const Desc = styled.p`
  color: var(--black, #212121);

  /* pretendard sb 16 */
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
  letter-spacing: -0.304px;
  margin-top: 4px;
`;
export const DescRed = styled.em`
  color: var(--red, #d81921);
  text-align: center;

  /* pretendard sb 16 */
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 24px */
  letter-spacing: -0.304px;
`;
