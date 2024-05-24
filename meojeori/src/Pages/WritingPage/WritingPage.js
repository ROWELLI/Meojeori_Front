import React, { useRef, useState } from "react";
import styled from "styled-components";

const WritingPage = () => {
  const input = useRef(null);
  const [info, setInfo] = useState({ image: null });
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [content, setContent] = useState('');

  const onClickimg = () => {
    input.current.click();
  };

  const setImage = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setInfo({ image: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleContent = () => {
    console.log("Title:", title);
    console.log("Price:", price);
    console.log("Content:", content);
  };

  return (
    <Container>
      <Write>
        <div>
          글쓰기
        </div>
      </Write>
      <EditPic>
        <button type="button" onClick={onClickimg}>
          <img src={info.image || 'default-image-path'} alt="사진 추가" />
        </button>
        <input type="file" ref={input} onChange={setImage} style={{ display: 'none' }} />
      </EditPic>
      <TitleArea>
        <Title type="text" placeholder="제목" value={title} onChange={(e) => setTitle(e.target.value)} />
      </TitleArea>
      <PriceArea>
        <Price type="text" placeholder="가격" value={price} onChange={(e) => setPrice(e.target.value)} />
      </PriceArea>
      <ContentArea>
        <Content type="text" placeholder="내용입력" value={content} onChange={(e) => setContent(e.target.value)} />
      </ContentArea>
      <WritingButton onClick={handleContent}>낭만 공유하기</WritingButton>
    </Container>
  );
};

export default WritingPage;

// Styled Components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const Write = styled.div`
  height: 24px;
  width: 56px;
  font-size: 20px;
`;

const EditPic = styled.div`
  margin-bottom: 20px;
  button {
    background: none;
    cursor: pointer;
    width: 740px;
    height: 367px;
  }
  img {
    max-width: 200px;
    max-height: 200px;
  }
`;

const TitleArea = styled.div`
  margin-bottom: 20px;
  width: 740px;
`;

const Title = styled.input`
  width: 740px; /* 변경된 부분 */
  height: 32px;
  padding: 10px;
  font-size: 16px;
`;

const PriceArea = styled.div`
  margin-bottom: 20px;
  width: 740px;
`;

const Price = styled.input`
  width: 740px; /* 변경된 부분 */
  height: 32px;
  padding: 10px;
  font-size: 16px;
`;

const ContentArea = styled.div`
  margin-bottom: 20px;
  width: 740px;
`;

const Content = styled.input`
  width: 740px; /* 변경된 부분 */
  height: 64px;
  padding: 10px;
  font-size: 16px;
`;

const WritingButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
`;
