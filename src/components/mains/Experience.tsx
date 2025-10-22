import styled from "styled-components";

const ExpTitle = styled.h2`
    margin-top: 2%;
    margin-bottom: 2%;
`
const ExpListHeader = styled.h3`
    margin-top: 4%;
    margin-left: 5%;
    text-align: left;`

const ExpListDescription = styled.ul`
    margin-top: 1%;
    margin-left: 1%;
    list-style: none;
    text-align: left;
    padding-right: 8%;`

const ExtraFontSize = styled.div`
    @media screen and (max-width: 750px) {
        font-size: calc(5px + 3.5vw);
    }
`


export default function Experience() {
    return (
    <>
        <ExtraFontSize>
            <title>Experience | Resume</title>
            <ExpTitle>Relevant Work Experience</ExpTitle>
            <ExpListHeader>Nashoba Pizza and Subs &#10070; 2020 - Present</ExpListHeader>
            <ExpListDescription>
                <li>Prepared food and served customers at Nashoba Pizza in Westford,
                    MA.
                </li>
            </ExpListDescription>
            <ExpListHeader>Student Painters &#10070;    Summer 2024</ExpListHeader>
            <ExpListDescription>
                <li>Worked as a painter for a student painting business.</li>
            </ExpListDescription>
            <ExpListHeader>Charlie's Ice Cream &#10070; Summer 2022 &#10070; Concord, MA</ExpListHeader>
            <ExpListDescription>
                <li>Worked as a ice scream scooper and cashier for Charlie's Ice Cream.</li>
            </ExpListDescription>
        </ExtraFontSize>
    </>
    )
}