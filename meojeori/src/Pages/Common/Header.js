import styled from 'styled-components'
import HeaderBack from '../../Assets/HeaderBack.png'
import HeaderLogo from '../../Assets/HeaderLogo.png'
import HeaderWrite from '../../Assets/HeaderWrite.png'

const Header = () => {



    return (
        // 전체 컨테이너
        <Container>
            <Div width="800px" height="87px" justifyContent="space-between" margin="21px 0 0 0" backgroundColor="none">
                <Div height="87px" position="relative" backgroundColor="none">

                    <Div position="absolute" backgroundColor="none">
                        <Img src={HeaderBack} />
                    </Div>
                    <Div position="absolute" width="130px" height="55px">
                        <Img src={HeaderLogo} />
                    </Div>
                    <Div position="absolute" width="93px" height="35px" margin="0 630px 0 0">
                        <Img src={HeaderWrite} />
                    </Div>
                    <Div position="absolute" width="100px" height="35px" margin="0 0 0  630px">
                        <Div>사진</Div>
                        <Div>이름</Div>
                    </Div>
                </Div>
            </Div>
        </Container>
    )
}

export default Header


/* 스타일 컴포넌트 선언 */

const Container = styled.div`
display: flex;
height: 87px;
width:100%;
background-color:  #5e8bff;
justify-content: center;
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
width: ${(props) => props.width || '100%'};
height: ${(props) => props.height || '100%'};
`