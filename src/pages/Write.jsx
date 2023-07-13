import React from "react";
import { styled } from "styled-components";
import { ContentInput, Input } from "../shared/Input";
import { PurPleButton } from "../shared/Button";
import { useInput } from "../hooks/useInput";
import { useMutation, useQueryClient } from "react-query";
import { addStay } from "../api/stayList";
import uuid from "react-uuid";
import { useNavigate } from "react-router-dom";

const Write = () => {
  const [author, setAuthor, authorChangeHandler] = useInput();
  const [stay, setStay, stayChangeHandler] = useInput();
  const [location, setLocation, locationChangeHandler] = useInput();
  const [detail, setDetail, detailChangeHandler] = useInput();

  const queryClient = useQueryClient();
  const mutation = useMutation(addStay, {
    onSuccess: () => {
      queryClient.invalidateQueries("stayList");
      console.log("성공");
    },
  });

  const navigate = useNavigate();

  const submitButtonHandler = (event) => {
    event.preventDefault();

    const newStay = {
      id: uuid(),
      author,
      stay,
      location,
      detail,
    };
    setAuthor("");
    setStay("");
    setLocation("");
    setDetail("");
    navigate("/stayList");
    mutation.mutate(newStay);
  };

  return (
    <Form onSubmit={submitButtonHandler}>
      <Container>
        <Title>작성자: </Title>
        <Input
          value={author}
          onChange={authorChangeHandler}
          placeholder="이름을 입력해주세요."
          required
        />
        <Title>숙소: </Title>
        <Input
          value={stay}
          onChange={stayChangeHandler}
          placeholder="숙소명을 입력해주세요."
          required
        />
        <Title>위치: </Title>
        <Input
          value={location}
          onChange={locationChangeHandler}
          placeholder="숙소 위치를 입력해주세요."
          required
        />
        <Title>설명: </Title>
        <ContentInput
          value={detail}
          onChange={detailChangeHandler}
          placeholder="기타 부연 설명을 입력해주세요."
        />
      </Container>

      <PurPleButton>제출</PurPleButton>
    </Form>
  );
};

export default Write;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Container = styled.div`
  display: grid;
  justify-items: center;
  grid-template-columns: 1fr 4fr;
  margin: 4vw 0px;
`;

const Title = styled.div`
  margin-top: 2vw;
  font-size: 20px;
`;
