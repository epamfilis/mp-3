import Header from "./Header.tsx";
import Nav from "./Nav.tsx";
import Footer from "./Footer.tsx";
import {Route, Routes} from "react-router";
import Home from "./mains/Home.tsx";
import Education from "./mains/Education.tsx";
import Achievements from "./mains/Achievements.tsx";
import Experience from "./mains/Experience.tsx";
import Extracurriculars from "./mains/Extracurriculars.tsx";
import Projects from "./mains/Projects.tsx";
import Credits from "./mains/Credits.tsx";
import styled from "styled-components";

const Wrapper=styled.div`
    width: 80vw;
    margin: 0 auto;
    text-align: center;
    font-family: "Times", "Times New Roman", serif;
    font-size: calc(2px + 1.7vw);

    @media screen and (max-width: 1000px) {
        font-size: calc(5px + 2.5vw);
`;

const Container=styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    
    @media screen and (max-width: 1000px) {
        flex-direction: column;
    }
`;

const Main = styled.main`
    background-color: darkseagreen;
    height: 100vh;
    width: 70%;

  @media screen and (max-width: 1000px) {
    width: 100%;
  }
`;


export default function Root(){
    return(
        <Wrapper>
            <Header/>
                <Container>
                    <Nav/>
                    <Main>
                        <Routes>
                            <Route path={`/`} element={<Home/>}/>
                            <Route path={`/education`} element={<Education/>}/>
                            <Route path={`/achievements`} element={<Achievements/>}/>
                            <Route path={`/experience`} element={<Experience/>}/>
                            <Route path={`/extracurriculars`} element={<Extracurriculars/>}/>
                            <Route path={`/projects`} element={<Projects/>}/>
                            <Route path={`/credits`} element={<Credits/>}/>
                        </Routes>
                    </Main>
                </Container>
            <Footer/>
        </Wrapper>
    )
}