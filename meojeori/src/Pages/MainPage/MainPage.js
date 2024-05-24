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
import MainFeedWhite from '../../Assets/MainFeedWhite.png'
import MainFeedImage from '../../Assets/MainFeedImage.png'
import FireOff from '../../Assets/FireOff.png'
import FireOn from '../../Assets/FireOn.png'
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
                    <Div width="800px" height="80px" margin="32px 0 0px 0" padding="15px" justifyContent="space-between" borderRadius="10px" border="2px solid black">
                        <Div width="246px" height="50px" borderRadius="10px" border="2px solid black" backgroundColor="red">
                            <Div borderRadius="10px" backgroundColor="red">최신순
                            </Div>
                        </Div>
                        <Div width="246px" height="50px" borderRadius="10px" border="2px solid black">
                            <Div borderRadius="10px">최신순
                            </Div>
                        </Div>
                        <Div width="246px" height="50px" borderRadius="10px" border="2px solid black">
                            <Div borderRadius="10px">최신순
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
                            <Div backgroundColor="none" position="absolute" flexDirection="column" justifyContent="start" margin="80px 0 0 0">
                                <Img src={MainFeedImage} width="740px" height="360px" />
                            </Div>
                            <Div position="absolute" width="40px" height="40px" backgroundColor="none" margin="450px 710px 0 0px">
                                <Img src={FireOn} width="40px" height="40px" />
                            </Div>
                            <Div position="absolute" width="690px" height="180px" backgroundColor="none" margin="450px 0 0 50px" flexDirection="column" alignItems="start" justifyContent="start">

                                <Div width="120px" height="40px" backgroundColor="none" margin="0 0 0px 0" justifyContent="start" >
                                    <Div backgroundColor="none" width="25px" justifyContent="start" >23</Div>
                                    <Div backgroundColor="none" width="60px">낭만지수</Div>
                                </Div>
                                <Div width="660px" height="60px" backgroundColor="none" margin="0 0 0 0" justifyContent="space-between" >
                                    <Div width="450px" justifyContent="start" backgroundColor="none">제목</Div>
                                    <Div width="150px" justifyContent="end" backgroundColor="none">30000</Div>
                                </Div>
                                <Div width="620px" height="60px" backgroundColor="none" margin="0 0 0 0" justifyContent="start" alignItems="start">이름</Div>
                            </Div>

                        </Div>
                    </Div>
                    <Div width="805px" height="635px" margin="20px 0 0 0" backgroundColor="none">
                        <Div backgroundColor="none" position="relative" flexDirection="column" justifyContent="start">
                            <Div position="absolute" width="740px" height="80px" backgroundColor="none" margin="0 0 0 0">
                                <Div position="absolute" width="60px" height="80px" backgroundColor="none" margin="0 680px 0 0" >이미지</Div>
                                <Div position="absolute" width="120px" height="80px" backgroundColor="none" margin="0 480px 0 0" justifyContent="start" >이름</Div>
                            </Div>
                            <Img src={MainFeedWhite} height="635px" />
                            <Div backgroundColor="none" position="absolute" flexDirection="column" justifyContent="start" margin="80px 0 0 0">
                                <Img src={MainFeedImage} width="740px" height="360px" />
                            </Div>
                            <Div position="absolute" width="40px" height="40px" backgroundColor="none" margin="450px 710px 0 0px">
                                <Img src={FireOff} width="40px" height="40px" />
                            </Div>
                            <Div position="absolute" width="690px" height="180px" backgroundColor="none" margin="450px 0 0 50px" flexDirection="column" alignItems="start" justifyContent="start">

                                <Div width="120px" height="40px" backgroundColor="none" margin="0 0 0px 0" justifyContent="start" >
                                    <Div backgroundColor="none" width="25px" justifyContent="start" >23</Div>
                                    <Div backgroundColor="none" width="60px">낭만지수</Div>
                                </Div>
                                <Div width="660px" height="60px" backgroundColor="none" margin="0 0 0 0" justifyContent="space-between" >
                                    <Div width="450px" justifyContent="start" backgroundColor="none">제목</Div>
                                    <Div width="150px" justifyContent="end" backgroundColor="none">30000</Div>
                                </Div>
                                <Div width="620px" height="60px" backgroundColor="none" margin="0 0 0 0" justifyContent="start" alignItems="start">이름</Div>
                            </Div>

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
border: ${(props) => props.border || '0px solid black'};
border-radius: ${(props) => props.borderRadius || ''};
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