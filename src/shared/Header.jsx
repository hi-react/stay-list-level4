import React from "react";
import { styled } from "styled-components";

const Header = () => {
  const goToHome = () => {
    window.location.href = "/";
  };
  return (
    <Head>
      <Title onClick={goToHome}>나만의 숙소 리스트</Title>
    </Head>
  );
};

export default Header;

const Head = styled.div`
  margin: 12px;
  font-size: 2.3vw;
  color: var(--color_white);
`;

const Title = styled.div`
  cursor: pointer;
`;
