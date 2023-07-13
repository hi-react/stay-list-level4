import { styled } from "styled-components";

export const PurpleButton = ({ ...props }) => {
  return <Button {...props}></Button>;
};

const Button = styled.button`
  width: 10vw;
  height: 35px;

  background-color: var(--color_purple2);
  border: none;
  border-radius: 5px;

  font-size: 16px;
  color: var(--color_white1);
  cursor: pointer;

  &:hover {
    background-color: var(--color_purple3);
    transition: all 0.3s;
  }
`;
