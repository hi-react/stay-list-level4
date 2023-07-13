import axios from "axios";

// 1. 조회 (axios.get)
const getStayList = async () => {
  const response = await axios.get(
    `${process.env.REACT_APP_SERVER_URL}/stayList`
  );
  return response.data;
};

// 2. 추가 (axios.post)
const addStay = async (newStay) => {
  await axios.post(`${process.env.REACT_APP_SERVER_URL}/stayList`, newStay);
};

export { getStayList, addStay };