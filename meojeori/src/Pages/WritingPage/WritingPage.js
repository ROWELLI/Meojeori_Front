import React, { useRef, useState } from "react";
import styled from "styled-components";
import Coin from "../../Assets/Coin.svg";
import Button from "../../Assets/Button.svg";
import Pic from "../../Assets/Pic.svg";
import Back from "../../Assets/Back.svg";
import Wrote from "../../Assets/낭만 글쓰기.svg";

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
          <WroteImage src={Wrote} alt="낭만 글쓰기" />
        </Write>
        <EditPic>
          <button type="button" onClick={onClickimg}>
            {info.image ? (
              <img src={info.image} alt="사진 추가" />
            ) : (
              <PicImage src={Pic} alt="사진 추가" />
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
      <WritingButton onClick={handleContent}>
        <ButtonImage src={Button} alt="낭만 공유하기" />
      </WritingButton>
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
  background-image: url(${Back}); /* 전체 페이지 배경 이미지 */
  background-size: cover;
  background-position: center;
`;

const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 800px;
  background: linear-gradient(to bottom, #EDFFD8, #9DE44D); /* 그라데이션 배경 */
  border: 1px solid black; /* 검은색 테두리 */
  box-shadow: 5px 5px 0px 0px rgba(0, 0, 0, 1); /* 그림자 효과 */
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

const WroteImage = styled.img`
  width: 100%;
  height: auto;
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

const PicImage = styled.img`
  max-width: 100%;
  max-height: 100%;
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
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 36px; /* 150% */
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
  font-family: Pretendard;
  font-size: 17px;
  font-style: normal;
  font-weight: 700;
  line-height: 25.5px; /* 150% */
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
  font-family: Pretendard;
  font-size: 17px;
  font-style: normal;
  font-weight: 400;
  line-height: 25.5px; /* 150% */
  border: 2px solid black; /* 검은색 테두리 */
  background-color: white; /* 배경색 흰색 */
  box-sizing: border-box; /* 박스 사이징 설정 */
`;

const WritingButton = styled.button`
  padding: 0; /* 패딩 제거 */
  font-size: 16px;
  cursor: pointer;
  width: 526px;
  background: none; /* 배경 없음 */
  border: none; /* 테두리 제거 */
`;

const ButtonImage = styled.img`
  width: 100%;
  height: auto;
`;
