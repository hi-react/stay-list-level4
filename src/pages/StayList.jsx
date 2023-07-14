import React from "react";
import { styled } from "styled-components";
import Stay from "../components/Stay";
import { getStayList } from "../api/stayList";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { PurpleButton } from "../shared/Button";

const StayList = () => {
  const navigate = useNavigate();
  const { isLoading, isError, data } = useQuery("stayList", getStayList);
  if (isLoading) {
    return <h1>로딩중..</h1>;
  }
  if (isError) {
    return <h1>오류가 발생하였습니다.</h1>;
  }

  const goToDetail = (stayItem) => {
    navigate(`/detail/${stayItem.id}`, { state: { stayItem } });
  };

  const goToWrite = () => {
    navigate("/write");
  };

  return (
    <StyledDiv>
      <WriteButton onClick={goToWrite}>숙소 기록하기</WriteButton>
      <div>
        {data.map((item) => {
          return (
            <Stay
              key={item.id}
              stayItem={item}
              onClick={() => goToDetail(item)}
            />
          );
        })}
      </div>
    </StyledDiv>
  );
};

export default StayList;

const StyledDiv = styled.div`
  margin: 30px;
  header {
    padding-left: 10px;
    font-size: 28px;
  }
`;

const WriteButton = styled(PurpleButton)`
  width: 15vw;
  margin-left: 45px;
  font-size: 1vw;
`;
