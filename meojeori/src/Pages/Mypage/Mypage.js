import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import fire from './fire.png';
import coin from './coin.png';
import offfire from './offfire.png'
import Back from '../../Assets/Back.svg';
import { getUserData } from '../../AxiosAPI';
import Header from '../Common/Header';

function Mypage() {
    const [userData, setUserData] = useState({}); // 유저 데이터를 저장할 state 추가
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getUserData("userId"); 
                setUserData(response.data); // 가져온 데이터를 state에 저장
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };
        fetchData();
    }, []); // 마운트될 때 한 번만 실행

    return (
        <div>
            <Container MarginTop="800px" Width="100vw" Height="2090px" Image={`url(${Back})`} >
            <Container MarginTop="20px"><Header /></Container>
            <Container Height="220px" MarginTop="30px" Color="transparent">
                <Circle Width="160px" Height="160px"></Circle>
            </Container>
            
            <Container Color="transparent" MarginTop="-30px"><Container Border="2px solid black" Width="396px" Height="110px" Color="white" Shadow="5px 5px 0px 0px rgba(0, 0, 0, 1)">
                <Container Width="10px"><Circle Width="8px" Height="8px" Color="black"></Circle></Container>
                <Container Width="360px"></Container>
                <Container Width="10px"><Circle Width="8px" Height="8px" Color="black"></Circle></Container>
                <Container Width="90%" Justify="left"><Text fontSize="17px" MarginLeft="20px">NAME: {userData.name || ''}</Text></Container>
                <Container Width="90%" Justify="left"><Text fontSize="17px" MarginLeft="20px">E-MAIL: {userData.email || ''}</Text></Container>
                <Container>

                <Container Width="10px"><Circle Width="8px" Height="8px" Color="black"></Circle></Container>
                <Container Width="360px"></Container>
                <Container Width="10px"><Circle Width="8px" Height="8px" Color="black"></Circle></Container>
                </Container>
                </Container></Container>

            <Container Width="805px" Color="transparent">

            
            <Container Border="2px solid black" Width="805px" Height="630px" Align="top" MarginTop="-30px" Shadow="5px 5px 0px 0px rgba(0, 0, 0, 1);">
                <Container Background="linear-gradient(to bottom, #EDFFD8, #9DE44D)" Color="#D9D9D9" Height="630px" Direction="column" Justify="top">
                    <Container MarginTop="50px" Width="740px" Height="50px" Justify="left" Color="transparent">
                        <Circle Width="36px" Height="36px" />
                        <Text fontSize="20px" MarginLeft="10px">{userData.name || ''}</Text>
                    </Container>
                    <Container Color="#E6E6E6" Width="740px" Height="366px" Align="top"></Container>
                    <Container Width="740px" Height="50px" Color="transparent">
                        <Container Width="40px" Height="40px" Color="transparent">
                            <img src={fire} alt="이미지 설명" />
                        </Container>
                        <Container Justify="left" Width="680px" Color="transparent">
                            <Text fontSize="17px" FontWeight="bold" MarginLeft="0px">{userData.id || ''} 낭만 지수</Text>
                        </Container>
                    </Container>
                    <Container Width="740px" Height="50px" Color="transparent">
                        <Container Justify="left" Width="570px" MarginLeft="30px" Color="transparent">
                            <Text fontSize="22px" FontWeight="bold" MarginLeft="10px">{userData.introduce || ''}</Text>
                        </Container>
                        <Container Justify="right" Width="90px" Color="transparent">
                            <Text fontSize="17px">가격</Text>
                        </Container>
                        <Container Width="24px" Height="26px" Color="transparent" MarginLeft="10px">
                            <img src={coin} alt="이미지 설명" />
                        </Container>
                    </Container>
                    <Container MarginLeft="40px" Width="680px" Height="50px" Justify="left" Color="transparent">
                        <Text fontSize="17px">내용</Text>
                    </Container>
                </Container>
            </Container>
            


            <Container Border="2px solid black" Width="805px" Height="630px" Align="top" MarginTop="70px" Shadow="5px 5px 0px 0px rgba(0, 0, 0, 1);">
                <Container Color="white" Height="630px" Direction="column" Justify="top">
                    <Container MarginTop="50px" Width="740px" Height="50px" Justify="left" Color="transparent">
                        <Circle Width="36px" Height="36px" />
                        <Text fontSize="20px" MarginLeft="10px">유저 네임</Text>
                    </Container>
                    <Container Color="#E6E6E6" Width="740px" Height="366px" Align="top"></Container>
                    <Container Width="740px" Height="50px" Color="transparent">
                        <Container Width="40px" Height="40px" Color="transparent">
                            <img src={offfire} alt="이미지 설명" />
                        </Container>
                        <Container Justify="left" Width="680px" Color="transparent">
                            <Text fontSize="17px" FontWeight="bold" MarginLeft="0px">숫자 낭만 지수</Text>
                        </Container>
                    </Container>
                    <Container Width="740px" Height="50px" Color="transparent">
                        <Container Justify="left" Width="570px" MarginLeft="30px" Color="transparent">
                            <Text fontSize="22px" FontWeight="bold" MarginLeft="10px">제목</Text>
                        </Container>
                        <Container Justify="right" Width="90px" Color="transparent">
                            <Text fontSize="17px">가격</Text>
                        </Container>
                        <Container Width="24px" Height="26px" Color="transparent" MarginLeft="10px">
                            <img src={coin} alt="이미지 설명" />
                        </Container>
                    </Container>
                    <Container MarginLeft="40px" Width="680px" Height="50px" Justify="left" Color="transparent">
                        <Text fontSize="17px">내용</Text>
                    </Container>
                </Container>
            </Container>
            </Container>
            </Container>


        </div>
    );
}

export const Container = styled.div`
    background-image: ${(props) => props.Image};
    border: ${(props) => props.Border};
    margin-top: ${(props) => props.MarginTop};
    background: ${(props) => props.Background}; /* 그라데이션 배경 설정 */
    background-color:  ${(props) => props.Color || "white"};
    width: ${(props) => props.Width || "100%"};
    height: ${(props) => props.Height || "auto"};
    display: flex;
    align-items: ${(props) => props.Align || "center"}; /* 세로 방향 가운데 정렬 */
    justify-content: ${(props) => props.Justify || "center"};
    margin-left: ${(props) => props.MarginLeft || '0px'};
    flex-direction: ${(props) => props.Direction || 'none'};; /* 세로 방향으로 아이템 나열 */    
    flex-wrap: wrap;
    box-shadow: ${(props) => props.Shadow || 'none'};
    
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


export default Mypage;
