import React from "react";
import { styled } from "styled-components";

const Header = () => {
  const goToHome = () => {
    window.location.href = "/";
  };
  return (
    <Head>
      <Title onClick={goToHome}>감성 스테이 모아보기</Title>
    </Head>
  );
};

export default Header;

const Head = styled.div`
  margin: 12px;
  font-size: 2.3vw;
  color: var(--color_white1);
`;

const Title = styled.div`
  cursor: pointer;
`;
