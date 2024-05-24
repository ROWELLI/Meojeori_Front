import styled from 'styled-components'
import LoginTitle from '../../Assets/LoginTitle.png'
import LoginCenter from '../../Assets/LoginCenter.png'
import LoginButton from '../../Assets/LoginButton.png'
import Ranking from '../../Assets/Ranking.png'
import MainRanking from '../../Assets/MainRanking.png'
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
                        <Div backgroundColor="none">
                            <Img src={MainRanking} />
                        </Div>
                    </Div>
                    <Div width="566px" height="348px" margin="20px 0 0 0">
                        <Div>
                            <Img src={LoginCenter} height="348px" />
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
/* border: ${(props) => props.border || '1px solid black'}; */
font-size: ${(props) => props.fontSize || "15px"};
font-weight: ${(props) => props.fontWeight || "bold"};
margin: ${(props) => props.margin || ""};
padding: ${(props) => props.padding || ""};
box-sizing: border-box;
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