import React, { useRef, useState } from "react";
import styled from "styled-components";
import Coin from "../../Assets/Coin.svg";

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
      <InnerContainer>
        <Write>
          <div>낭만 글쓰기</div>
        </Write>
        <EditPic>
          <button type="button" onClick={onClickimg}>
            {info.image ? (
              <img src={info.image} alt="사진 추가" />
            ) : (
              '+ 사진 추가'
            )}
          </button>
          <input type="file" ref={input} onChange={setImage} style={{ display: 'none' }} />
        </EditPic>
        <TitleArea>
          <Title type="text" placeholder="제목" value={title} onChange={(e) => setTitle(e.target.value)} />
        </TitleArea>
        <PriceArea>
          <PriceContainer>
            <CoinIcon src={Coin} alt="Coin" />
            <Price type="text" placeholder="낭만에 지불한 금액" value={price} onChange={(e) => setPrice(e.target.value)} />
          </PriceContainer>
        </PriceArea>
        <ContentArea>
          <Content type="text" placeholder="여러분은 어떤 청춘을 보내셨나요? 더 저렴하게 더 낭만있게 보내셨나요?" value={content} onChange={(e) => setContent(e.target.value)} />
        </ContentArea>
      </InnerContainer>
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
  width: 100vw;
  height: 100vh;
  background: linear-gradient(to bottom, #5E8BFF, #A9C1FC); /* 전체 페이지 배경색 */
`;

const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 800px;
  background: linear-gradient(to bottom, #EDFFD8, #9DE44D); /* 그라데이션 배경 */
  border: 2px solid black; /* 검은색 테두리 */
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1), 0px 6px 20px rgba(0, 0, 0, 0.1); /* 그림자 효과 */
  padding: 20px;
  margin-bottom: 23px; /* 버튼과의 간격을 위해 추가 */
  box-sizing: border-box; /* 박스 사이징 설정 */
`;

const Write = styled.div`
  height: 36px;
  width: 110px;
  font-size: 20px;
  margin: 23px 0; /* 위아래 마진 23px */
`;

const EditPic = styled.div`
  margin-bottom: 13px;
  button {
    background: #E6E6E6;
    cursor: pointer;
    width: 740px;
    height: 367px;
    border: 2px solid black; /* 검은색 테두리 */
    box-sizing: border-box; /* 박스 사이징 설정 */
  }
  img {
    max-width: 200px;
    max-height: 200px;
  }
`;

const TitleArea = styled.div`
  margin-bottom: 10px;
  width: 100%;
  padding: 0;
  box-sizing: border-box; /* 박스 사이징 설정 */
`;

const Title = styled.input`
  width: calc(100% - 4px); /* 패딩과 충돌 방지를 위한 너비 조정 */
  height: 32px;
  padding: 10px;
  font-size: 16px;
  border: 2px solid black; /* 검은색 테두리 */
  background-color: white; /* 배경색 흰색 */
  box-sizing: border-box; /* 박스 사이징 설정 */
`;

const PriceArea = styled.div`
  margin-bottom: 10px;
  width: 100%;
  padding: 0;
  box-sizing: border-box; /* 박스 사이징 설정 */
`;

const PriceContainer = styled.div`
  position: relative;
  width: 100%;
`;

const CoinIcon = styled.img`
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
`;

const Price = styled.input`
  width: calc(100% - 4px);
  height: 32px;
  padding: 10px 10px 10px 40px; /* 왼쪽 패딩을 아이콘 공간 확보 위해 조정 */
  font-size: 16px;
  border: 2px solid black; /* 검은색 테두리 */
  background-color: white; /* 배경색 흰색 */
  box-sizing: border-box; /* 박스 사이징 설정 */
`;

const ContentArea = styled.div`
  margin-bottom: 30px;
  width: 100%;
  padding: 0;
  box-sizing: border-box; /* 박스 사이징 설정 */
`;

const Content = styled.input`
  width: calc(100% - 4px); /* 패딩과 충돌 방지를 위한 너비 조정 */
  height: 64px;
  padding: 10px;
  font-size: 16px;
  border: 2px solid black; /* 검은색 테두리 */
  background-color: white; /* 배경색 흰색 */
  box-sizing: border-box; /* 박스 사이징 설정 */
`;

const WritingButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  width: 526px;
  background-color: #FFFF00; /* 버튼 색상 변경 */
  border: none; /* 테두리 제거 */
`;
