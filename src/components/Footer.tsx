import styled from "styled-components";

const StyledFooter = styled.footer`
    background-color: #BAC7BE;
    padding-top: 0.06vw;
`

export default function Footer() {
    return (
        <StyledFooter>
            <p>All rights reserved by Elias Pamfilis <a href="/credits">Credits</a> &#169;</p>
        </StyledFooter>)
}