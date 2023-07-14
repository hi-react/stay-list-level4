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

// 3. 삭제 (axios.delete)
const deleteStay = async (stayId) => {
  await axios.delete(`${process.env.REACT_APP_SERVER_URL}/stayList/${stayId}`);
};

// 4. 수정 (axios.put)
const updateStay = async (stayId, updatedStay) => {
  await axios.put(
    `${process.env.REACT_APP_SERVER_URL}/stayList/${stayId}`,
    updatedStay
  );
};

export { getStayList, addStay, deleteStay, updateStay };
