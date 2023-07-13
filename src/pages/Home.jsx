import React from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

const Home = () => {
  const navigate = useNavigate();

  const goToWrite = () => {
    navigate("/write");
  };
  const goToStayList = () => {
    navigate("/stayList");
  };

  return (
    <>
      <Title>어디로 떠나볼까요?</Title>
      <Body>
        <Option onClick={goToWrite}>숙소 기록하기</Option>
        <Option onClick={goToStayList}>나의 숙소 LIST</Option>
      </Body>
    </>
  );
};

export default Home;

const Title = styled.div`
  margin-left: 20px;
  padding: 40px;
  font-size: 28px;
`;

const Body = styled.div`
  display: flex;
  gap: 50px;
  margin: 20px auto;
`;

const Option = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 30vw;
  height: 35vw;

  margin-bottom: 30px;

  background-color: var(--color_purple2);
  border: 1.5px solid var(--color_black);
  border-radius: 5px;

  font-size: 20px;
  color: var(--color_white);

  cursor: pointer;
`;
