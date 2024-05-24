import { Routes, Route } from 'react-router-dom'
import Login from '../Pages/Login/Login'
import Mypage from '../Pages/Mypage/Mypage'
import WritingPage from '../Pages/WritingPage/WritingPage'
import Header from '../Pages/Common/Header'
import styled from 'styled-components'

function Router() {
    return (
        <Container>
            <Div>
                <Header />
            </Div>
            <Div>
                <Routes>
                    <Route path='/' element={<Login />} />
                    <Route path='/Mypage' element={<Mypage />} />
                    <Route path='/WritingPage' element={<WritingPage />} />
                </Routes>
            </Div>
        </Container>
    );
}

export default Router;

const Container = styled.div`
display: flex;
height: 100vh;
flex-direction: column;
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
font-size: ${(props) => props.fontSize || "15px"};
font-weight: ${(props) => props.fontWeight || "bold"};
margin: ${(props) => props.margin || ""};
padding: ${(props) => props.padding || ""};
box-sizing: border-box;
`