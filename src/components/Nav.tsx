import {Link} from "react-router";
import styled from 'styled-components';

const StyledNav = styled.nav`
    background-color: #C2E1C2;
    width: 30%;

    @media screen and (max-width: 1000px) {
        width: 100%;
    }
    
`
const StyledUl = styled.ul`
    padding-left: 0;
    list-style: none;
    display: flex;
    flex-direction: column;
    width: 80%;
    margin: 0 auto;

    @media screen and (max-width: 1000px) {
        width: 100%;
        margin-left: 0;
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
    }
`
const StyledLi = styled.li`
    border: 3px solid black;
    margin-top: 3%;
    margin-bottom: 3%;
    background-color: #EBF2FA;

    @media screen and (max-width: 1000px) {
        padding: 0.525%;
    }
`
const StyledLink = styled(Link)`
    text-decoration: none;
    display: block;
    font-size: calc(2px + 2vw);
    font-family: "Times", "Times New Roman", "serif";
`


export default function Nav(){
    return (
    <StyledNav>
        <StyledUl>
            <StyledLi><StyledLink to={`/`}>Home</StyledLink></StyledLi>
            <StyledLi><StyledLink to={`/education`}>Education</StyledLink></StyledLi>
            <StyledLi><StyledLink to={`/achievements`}>Achievements</StyledLink></StyledLi>
            <StyledLi><StyledLink to={`/experience`}>Experience</StyledLink></StyledLi>
            <StyledLi><StyledLink to={`/extracurriculars`}>Extracurriculars</StyledLink></StyledLi>
            <StyledLi><StyledLink to={`/projects`}>Projects</StyledLink></StyledLi>
        </StyledUl>
    </StyledNav>)
}