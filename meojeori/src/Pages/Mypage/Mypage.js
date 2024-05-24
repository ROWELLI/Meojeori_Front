import react from "react";
import styled from 'styled-components';

function Mypage() {
    return (
        <div>
            <Container Height="220px" MarginTop="30px">
                <Circle Width="160px" Height="160px"></Circle>
            </Container>
            <Container Height="50px"><Text fontSize="20px">구글 로그인 이름</Text></Container>
            <Container Height="50px"><Text fontSize="20px">이메일</Text></Container>
            <Container><IconButton Height="40px" Width="100px"><Text fontSize="20px">로그아웃</Text></IconButton></Container>
        </div>
    );
}

export const Container = styled.div`
    margin-top: ${(props) => props.MarginTop};
    background-color: white;
    width: ${(props) => props.Width || "100%"};
    height: ${(props) => props.Height || "auto"};
    display: flex;
    align-items: ${(props) => props.Align || "center"}; /* 세로 방향 가운데 정렬 */
    justify-content: ${(props) => props.Justify || "center"};
    margin-left: ${(props) => props.MarginLeft || '0px'};
`;

export const Circle = styled.div`
    width: ${(props) => props.Width}; /* 너비 */
    height: ${(props) => props.Height};/* 높이 */
    background-color: ${(props) => props.Color || "gray"};/* 배경색 */
    border-radius: 50%;/* 원 모양 만들기 */
`;

export const Text = styled.div`
    margin-left: ${(props) => props.MarginLeft || '0px'};
    margin-right: ${(props) => props.MarginRight || '0px'};
    margin-top: ${(props) => props.MarginTop};
    font-weight: ${(props) => props.FontWeight};
    font-size: ${(props) => props.fontSize || '13px'};
    text-align: center; /* 글자 가운데 정렬 */
    color: ${(props) => props.Color || "#000000"}; //검정색을 디폴드 값으로 지정
    display: inline-block; /* 텍스트를 한 줄로 표시 */
    text-decoration :  ${(props) => props.TextDeco || "none"};
`;

const IconButton = styled.button`
    background-color: lightgray;
    line-height: 0;
    border: none;
    width: ${(props) => props.Width};  //props로 width가변값으로 만들기
    padding: 0px;
    height: ${(props) => props.Height};  //props로 height가변값으로 만들기
    margin-left: ${(props) => props.MarginLeft};
    &:hover{
        background-color: gray;
    }
    `;

export default Mypage;