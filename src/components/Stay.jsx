import React from "react";
import { styled } from "styled-components";

const Stay = ({ stay }) => {
  return (
    <StyledDiv>
      <Title>{stay.stay}</Title>
      <Author>작성자: {stay.author}</Author>
    </StyledDiv>
  );
};

export default Stay;

const StyledDiv = styled.div`
  width: 90%;
  margin: 30px auto;
  padding: 30px 20px;

  background-color: var(--color_white2);
  border-radius: 10px;
`;

const Title = styled.p`
  font-size: 16px;
`;

const Author = styled.p`
  font-size: 12px;
`;
