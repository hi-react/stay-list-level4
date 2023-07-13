import React from "react";
import { styled } from "styled-components";
import Stay from "../components/Stay";
import { getStayList } from "../api/stayList";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";

const StayList = () => {
  const navigate = useNavigate();
  const { isLoading, isError, data } = useQuery("stayList", getStayList);
  if (isLoading) {
    return <h1>로딩중..</h1>;
  }
  if (isError) {
    return <h1>오류가 발생하였습니다.</h1>;
  }

  return (
    <StyledDiv>
      <header>Stay List</header>
      <div>
        {data.map((item) => {
          const goToDetail = () => {
            navigate(`/detail/${item.id}`);
          };
          return <Stay key={item.id} stayItem={item} onClick={goToDetail} />;
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
