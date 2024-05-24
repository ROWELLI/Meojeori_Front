import styled from 'styled-components'

const Login = () => {



    return (
        // 전체 컨테이너
        <Container>
            <Div>
                <Div>
                    <Div>
                        로고
                    </Div>
                </Div>
                <Div>
                    <Div>
                        뭔가 간지나게 설명
                    </Div>
                </Div>
                <Div>
                    <Div>
                        <a href='' style={{ color: "black", margin: "0 0 0 3px" }}>로그인</a>
                    </Div>
                </Div>
            </Div>
        </Container>
    )
}

export default Login


/* 스타일 컴포넌트 선언 */

const Container = styled.div`
display: flex;
height: 100vh;

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
height: 31px;
`
