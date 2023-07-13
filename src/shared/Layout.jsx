import { styled } from "styled-components";
import "../color.css";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <Container>
      <Header />
      <Body>{children}</Body>
      <Footer>copyright @heeyeon</Footer>
    </Container>
  );
};

export default Layout;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90vw;
  margin: 0 auto;
  background-color: var(--color_purple2);
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;

  background-color: var(--color_purple1);
`;

const Footer = styled.div`
  margin: 5px;
  margin-left: auto;
  font-size: 1vw;
  color: var(--color_white1);
`;
