import { styled } from "styled-components";

export const Input = ({ ...props }) => {
  return <StInput {...props}></StInput>;
};

export const ContentInput = ({ ...props }) => {
  return <Content {...props}></Content>;
};

const StInput = styled.input`
  width: 80%;
  height: 4vw;
  margin: 0.8vw;
  padding-left: 10px;
  border: 1.5px solid;
  border-radius: 5px;
  text-decoration: none;
  outline: none;
`;

const Content = styled.textarea`
  width: 80%;
  height: 17vw;
  margin: 0.8vw;
  padding-top: 10px;
  padding-left: 10px;
  border: 1.5px solid;
  border-radius: 5px;
  /* text-decoration: none; */
  outline: none;
`;
