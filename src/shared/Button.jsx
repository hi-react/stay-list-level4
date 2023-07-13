import { styled } from "styled-components";

export const PurPleButton = ({ ...props }) => {
  return <Button {...props}></Button>;
};

const Button = styled.button`
  width: 10vw;
  height: 35px;

  margin-bottom: 40px;
  margin-right: 6.5vw;
  margin-left: auto;
  padding: 5px;

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
