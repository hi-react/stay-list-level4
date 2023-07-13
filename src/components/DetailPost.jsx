import { styled } from "styled-components";

const DetailPost = ({ author, stay, location, detail }) => {
  return (
    <Container>
      <div>
        <Stay>
          {stay} ({location})
        </Stay>
        {detail && <DetailContent>{detail}</DetailContent>}
      </div>
      <Author>작성자: {author}</Author>
    </Container>
  );
};

export default DetailPost;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 80%;
  min-height: 300px;
  margin: 30px auto;
  margin-bottom: 100px;
  background-color: var(--color_white2);
  border-radius: 10px;
`;

const Stay = styled.p`
  padding: 20px 30px;
  padding-bottom: 0px;
  margin-bottom: 0px;
`;

const DetailContent = styled.p`
  margin-top: 50px;
  padding: 30px;
  padding-top: 0px;
  white-space: pre-wrap;
`;

const Author = styled.p`
  align-self: flex-end;
  margin-bottom: 20px;
  padding-right: 30px;
  font-size: 14px;
`;
