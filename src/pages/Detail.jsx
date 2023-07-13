import React from "react";
import { styled } from "styled-components";
import { PurpleButton } from "../shared/Button";
import { useNavigate } from "react-router-dom";
import DetailPost from "../components/DetailPost";

const Detail = () => {
  const navigate = useNavigate();
  return (
    <>
      <BackButton
        onClick={() => {
          navigate(-1);
        }}
      >
        {" "}
        뒤로가기{" "}
      </BackButton>
      <DetailPost />
    </>
  );
};

export default Detail;

const BackButton = styled(PurpleButton)`
  margin: 5px;
  background-color: transparent;
`;
