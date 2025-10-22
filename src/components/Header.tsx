import styled from 'styled-components';

export default function Header() {

const HeaderWrapper = styled.header`
    background-color: #BAC7BE;
    width: 80vw;
    text-align: center;
    box-sizing: border-box;
`
const StyledH1 = styled.h1`
    text-align: left;
    margin-left: 1%;

    @media screen and (max-width: 1000px) {
        text-align: center;
        margin-left: 1%;
    }
`
const StyledP = styled.p`
    text-align: left;
    margin-left: 1%;
    @media screen and (max-width: 1000px) {
        text-align: center;
        margin-left: 1%;
    }
`


    return (
        <HeaderWrapper>
            <StyledH1>Elias' Resume</StyledH1>
            <StyledP>An online resume showcasing Elias' accomplishments.</StyledP>
        </HeaderWrapper>
    )
}