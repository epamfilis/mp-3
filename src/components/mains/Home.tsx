import styled from "styled-components";
import portrait from "../../assets/Portrait2023.jpg";

const StyledImg = styled.img`
    max-width: 35%;
    max-height: 35%;
`

const HomeTitle = styled.h2`
    margin-top: 2%;
    margin-bottom: 2%;
`

const StyledP = styled.p`
    margin: 1%;
    justify-content: left;
    text-align: left;`

const ContactContainer = styled.div`
    margin-top: 10%;
`


export default function Home(){

    return (
        <>
            <title>Home | Resume</title>
            <HomeTitle>Home</HomeTitle>
            <StyledImg src={portrait} alt="Elias"/>
            <StyledP>My name is Elias Pamfilis, and I am a student studying computer science at Boston University.
                Here on my online resume you can find all my relevant education and work experience. Feel free
                to contact me if you have any questions or inquiries.
            </StyledP>
            <ContactContainer>
                <p>Contact Me:</p>
                <address>Phone Number: +1 (978)-761-0212</address>
                <address>Email: <a href="mailto:eliasp05@bu.edu">eliasp05@bu.edu</a></address>
            </ContactContainer>
        </>
    )
}