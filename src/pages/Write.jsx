import React from "react";
import { styled } from "styled-components";
import { ContentInput, Input } from "../shared/Input";
import { PurpleButton } from "../shared/Button";
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
  const addStayMutation = useMutation(addStay, {
    onSuccess: () => {
      queryClient.invalidateQueries("stayList");
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
    addStayMutation.mutate(newStay);
  };

  const goToList = () => {
    navigate("/stayList");
  };

  return (
    <>
      <ListButton onClick={goToList}>숙소 LIST</ListButton>
      <Form onSubmit={submitButtonHandler}>
        <Container>
          <Title>작성자: </Title>
          <Input
            name="author"
            value={author}
            onChange={authorChangeHandler}
            placeholder="이름을 입력해주세요."
            required
          />
          <Title>숙소: </Title>
          <Input
            name="stay"
            value={stay}
            onChange={stayChangeHandler}
            placeholder="숙소명을 입력해주세요."
            required
          />
          <Title>위치: </Title>
          <Input
            name="location"
            value={location}
            onChange={locationChangeHandler}
            placeholder="숙소 위치를 입력해주세요."
            required
          />
          <Title>설명: </Title>
          <ContentInput
            name="detail"
            value={detail}
            onChange={detailChangeHandler}
            placeholder="기타 부연 설명을 입력해주세요."
          />
        </Container>

        <SubmitButton>제출</SubmitButton>
      </Form>
    </>
  );
};

export default Write;

const ListButton = styled(PurpleButton)`
  margin: 30px;
  margin-bottom: 0px;
  margin-left: 80px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Container = styled.div`
  display: grid;
  justify-items: center;
  grid-template-columns: 1fr 4fr;
  margin: 3vw 0px;
`;

const Title = styled.div`
  margin-top: 2vw;
  font-size: 20px;
`;

const SubmitButton = styled(PurpleButton)`
  margin-bottom: 47px;
  margin-right: 6.5vw;
  margin-left: auto;
  padding: 5px;
`;
