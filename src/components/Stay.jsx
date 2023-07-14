import React, { useState } from "react";
import { styled } from "styled-components";
import { PurpleButton } from "../shared/Button";
import { useMutation, useQueryClient } from "react-query";
import { deleteStay } from "../api/stayList";
import Modal from "./Modal";

const Stay = ({ stayItem, ...props }) => {
  const [isOpen, setIsOpen] = useState(false);

  const queryClient = useQueryClient();

  const deleteStayMutation = useMutation(deleteStay, {
    onSuccess: () => {
      queryClient.invalidateQueries("stayList");
    },
  });

  const deleteStayHandler = (stayId) => {
    const confirmed = window.confirm("이 항목을 삭제하시겠습니까?");
    if (confirmed) {
      deleteStayMutation.mutate(stayId);
    }
  };

  return (
    <StyledDiv>
      <FirstRow>
        <p {...props}>
          {stayItem.stay} ({stayItem.location})
        </p>
        <div>
          <StateButton onClick={() => setIsOpen(true)}>수정</StateButton>
          {isOpen && (
            <Modal isOpen={isOpen} setIsOpen={setIsOpen} stayItem={stayItem} />
          )}
          <StateButton onClick={() => deleteStayHandler(stayItem.id)}>
            삭제
          </StateButton>
        </div>
      </FirstRow>
      <div>작성자: {stayItem.author}</div>
    </StyledDiv>
  );
};

export default Stay;

const StyledDiv = styled.div`
  width: 90%;
  margin: 30px auto;
  padding: 20px;
  padding-bottom: 30px;
  background-color: var(--color_white2);
  border-radius: 10px;

  div {
    font-size: 13px;
  }
`;

const FirstRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  p {
    font-size: 18px;
    cursor: pointer;
  }
  div {
    display: flex;
    gap: 3px;
  }
`;

const StateButton = styled(PurpleButton)`
  width: 50px;
  font-size: 14px;
`;
