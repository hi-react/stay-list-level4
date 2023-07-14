import { useState } from "react";
import { createPortal } from "react-dom";
import { useMutation, useQueryClient } from "react-query";
import { styled } from "styled-components";
import { updateStay } from "../api/stayList";
import { Input } from "../shared/Input";
import { PurpleButton } from "../shared/Button";

export const PORTAL_MODAL = "portal-root";

const Modal = ({ isOpen, setIsOpen, stayItem }) => {
  const [updatedStay, setUpdatedStay] = useState({
    id: stayItem.id,
    author: stayItem.author,
    stay: stayItem.stay,
    location: stayItem.location,
    detail: stayItem.detail,
  });

  const queryClient = useQueryClient();

  const UpdateStayMutation = useMutation(updateStay, {
    onSuccess: () => {
      queryClient.invalidateQueries("stayList");
      setIsOpen(false);
    },
  });

  const updateStayHandler = (stayId) => {
    const updateData = {
      id: stayId,
      author: stayItem.author,
      stay: updatedStay.stay,
      location: updatedStay.location,
      detail: updatedStay.detail,
    };
    console.log(updateData);
    UpdateStayMutation.mutate(stayId, updateData);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    updateStayHandler(stayItem.id);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedStay((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const closeHandler = () => {
    setIsOpen(false);
  };

  const stopPropagation = (e) => {
    e.stopPropagation();
  };

  return isOpen
    ? createPortal(
        <Outer onClick={closeHandler}>
          <Inner onClick={stopPropagation}>
            <p>수정창입니다.</p>

            <form onSubmit={() => handleFormSubmit}>
              <Div>
                <Item>
                  <label>숙소:</label>
                  <StInput
                    name="stay"
                    value={updatedStay.stay}
                    onChange={handleInputChange}
                  />
                </Item>
                <Item>
                  <label>위치:</label>
                  <StInput
                    name="location"
                    value={updatedStay.location}
                    onChange={handleInputChange}
                  />
                </Item>
              </Div>
              <ButtonSet>
                <Button>수정</Button>
                <Button onClick={closeHandler}>닫기</Button>
              </ButtonSet>
            </form>
          </Inner>
        </Outer>,
        document.getElementById(PORTAL_MODAL)
      )
    : null;
};

export default Modal;

const Outer = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
`;

const Inner = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  width: 35%;
  padding: 100px;
  padding-top: 60px;
  background-color: var(--color_white1);
  border-radius: 10px;

  p {
    font-size: larger;
  }

  form {
    margin-top: 20px;
  }
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
`;

const Item = styled.div`
  display: flex;
  align-items: center;

  label {
    width: 50px;
  }
`;

const StInput = styled(Input)`
  height: 30px;
`;

const ButtonSet = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 5px;
  margin-top: 30px;
`;
const Button = styled(PurpleButton)`
  width: 45px;
  height: 28px;
  font-size: 14px;
`;
