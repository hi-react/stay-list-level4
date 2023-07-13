import React from "react";
import { styled } from "styled-components";
import { PurpleButton } from "../shared/Button";
import { useLocation, useNavigate } from "react-router-dom";
import DetailPost from "../components/DetailPost";

const Detail = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const stayItem = location.state?.stayItem;

  return (
    <>
      <BackButton
        onClick={() => {
          navigate(-1);
        }}
      >
        뒤로가기
      </BackButton>
      {stayItem && <DetailPost {...stayItem} />}
    </>
  );
};

export default Detail;

const BackButton = styled(PurpleButton)`
  margin: 10px;
  margin-top: 40px;
  margin-left: 20px;
  background-color: transparent;
`;
