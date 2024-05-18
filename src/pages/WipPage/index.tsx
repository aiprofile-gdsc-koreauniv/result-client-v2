import React from "react";
import styled from "styled-components";
import { Container, Desc, DescRed, Question, Title } from "./style";
export const WipPage = () => {
  return (
    <Container>
      {/* <Top>
        <Left>
          <Logo src={"/logo/Tiger.svg"} />
          <Text>호랑이 사진관</Text>
        </Left>
      </Top> */}
      <Question src={"/img/question.svg"} />
      <Title>서비스 준비 중입니다.</Title>
      <Desc>
        <DescRed>2024년 5월 20일</DescRed>에 정식 배포됩니다
      </Desc>
    </Container>
  );
};
