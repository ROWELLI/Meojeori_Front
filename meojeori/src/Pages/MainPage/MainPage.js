import styled from 'styled-components'
import LoginTitle from '../../Assets/LoginTitle.png'
import LoginCenter from '../../Assets/LoginCenter.png'
import LoginButton from '../../Assets/LoginButton.png'
import Ranking from '../../Assets/Ranking.png'
import MainRanking from '../../Assets/MainRanking.png'
import RankingFirst from '../../Assets/RankingFirst.png'
import RankingSecond from '../../Assets/RankingSecond.png'
import RankingThird from '../../Assets/RankingThird.png'
import MainFeed from '../../Assets/MainFeed.png'
import MainFeedImage from '../../Assets/MainFeedImage.png'
import Header from '../Common/Header'

const MainPage = () => {



    return (
        // 전체 컨테이너
        <Container>
            <Div flexDirection="column" justifyContent="start">
                <Header />
                <Div flexDirection="column" justifyContent="start" style={{ background: "linear-gradient(to bottom, #5E8BFF, #A9C1FC)" }}>
                    <Div width="345px" height="70px" backgroundColor="none" margin="40px 0 0 450px">
                        <Img src={Ranking} width="345px" height="70px" />
                    </Div>
                    <Div width="800px" height="344px" margin="-25px 0 0 0" backgroundColor="none">
                        <Div backgroundColor="none" position="relative">
                            <Img src={MainRanking} />
                            <Div position="absolute" width="50px" height="34px" margin="-275px 700px 0 0" backgroundColor="none" justifyContent="start">
                                <Div backgroundColor="none" >
                                    머저리
                                </Div>
                            </Div>
                            <Div position="absolute" width="50px" height="34px" margin="-275px 0 0 100px " backgroundColor="none" justifyContent="start">
                                <Div backgroundColor="none" >
                                    거저리
                                </Div>
                            </Div>
                            <Div flexDirection="column" position="absolute" width="740px" height="264px" backgroundColor="none" margin="50px 0 0 0">
                                <Div width="740px" height="80px" margin="0 0 0 0" justifyContent="start">
                                    <Img src={RankingFirst} width="740px" height="80px" />
                                    <Div justifyContent="start" margin="0 0 0 90px" position="absolute" width="350px" height="36px" backgroundColor="none" fontSize="22px">이 글의 제목은 이렇게 됩니다.</Div>
                                    <Div justifyContent="end" margin=" 0 0 0 430px" position="absolute" width="100px" height="36px" backgroundColor="none" fontSize="17px">30000</Div>
                                </Div>
                                <Div width="740px" height="80px" margin="12px 0 0 0" justifyContent="start">
                                    <Img src={RankingSecond} width="740px" height="80px" />
                                    <Div justifyContent="start" margin="0 0 0 90px" position="absolute" width="350px" height="36px" backgroundColor="none" fontSize="22px">이 글의 제목은 이렇게 됩니다.</Div>
                                    <Div justifyContent="end" margin=" 0 0 0 430px" position="absolute" width="100px" height="36px" backgroundColor="none" fontSize="17px">30000</Div>
                                </Div>
                                <Div width="740px" height="80px" margin="12px 0 0 0" justifyContent="start">
                                    <Img src={RankingThird} width="740px" height="80px" />
                                    <Div justifyContent="start" margin="0 0 0 90px" position="absolute" width="350px" height="36px" backgroundColor="none" fontSize="22px">이 글의 제목은 이렇게 됩니다.</Div>
                                    <Div justifyContent="end" margin=" 0 0 0 430px" position="absolute" width="100px" height="36px" backgroundColor="none" fontSize="17px">30000</Div>
                                </Div>
                            </Div>
                        </Div>
                    </Div>
                    <Div width="805px" height="635px" margin="20px 0 0 0" backgroundColor="none">
                        <Div backgroundColor="none" position="relative" flexDirection="column" justifyContent="start">
                            <Div position="absolute" width="740px" height="80px" backgroundColor="none" margin="0 0 0 0">
                                <Div position="absolute" width="60px" height="80px" backgroundColor="none" margin="0 680px 0 0" >이미지</Div>
                                <Div position="absolute" width="120px" height="80px" backgroundColor="none" margin="0 480px 0 0" justifyContent="start" >이름</Div>
                            </Div>
                            <Img src={MainFeed} height="635px" />
                        </Div>
                    </Div>
                    <Div width="566px" height="61px" margin="23px 0 0 0">
                        <Div>
                            <Img src={LoginButton} height="61px" />
                        </Div>
                    </Div>
                </Div>
            </Div>
        </Container>
    )
}

export default MainPage


/* 스타일 컴포넌트 선언 */

const Container = styled.div`
display: flex;
height: 100vh;
width: 100vw;

`

const Div = styled.div`
width: ${(props) => props.width || '100%'};
height: ${(props) => props.height || '100%'};
display: ${(props) => props.display || 'flex'};
flex-direction: ${(props) => props.flexDirection || 'row'};
justify-content: ${(props) => props.justifyContent || 'center'};
align-items: ${(props) => props.alignItems || 'center'};
align-content: ${(props) => props.alignContent || ''};
background-color: ${(props) => props.backgroundColor || 'white'};
border: ${(props) => props.border || '1px solid black'};
font-size: ${(props) => props.fontSize || "15px"};
font-weight: ${(props) => props.fontWeight || "bold"};
margin: ${(props) => props.margin || ""};
padding: ${(props) => props.padding || ""};
box-sizing: border-box;
position: ${(props) => props.position || ''};
`
const Input = styled.input`
width: ${(props) => props.width || '100%'};
height: ${(props) => props.height || '100%'};
background-color: ${(props) => props.backgroundColor || 'white'};
color: ${(props) => props.color || "black"};
font-size: ${(props) => props.fontSize || "15px"};
font-weight: ${(props) => props.fontWeight || ""};
box-sizing: border-box;
border: 0.5px solid #dbdbdb;
padding: ${(props) => props.padding || ""};
border-radius: 5px;
/* input 태그 placeholder 스타일 정하기 */
    &::placeholder{
        color: #dbdbdb;
    }
`

const Img = styled.img`
height: ${(props) => props.height || '100%'};
`