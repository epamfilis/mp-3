import styled from "styled-components";

const ExtraTitle = styled.h2`
    margin-top: 2%;
    margin-bottom: 2%;
`
const ExtraListHeader = styled.h3`
    margin-top: 4%;
    margin-left: 5%;
    text-align: left;`

const ExtraListDescription = styled.ul`
    margin-top: 1%;
    margin-left: 1%;
    list-style: none;
    text-align: left;
    padding-right: 8%;`


export default function Extracurriculars() {
    return (
        <>
            <title>Extracurriculars | Resume</title>
            <ExtraTitle>Extracurriculars</ExtraTitle>
            <ExtraListHeader>Intramural Soccer &#10070; UNH Intramural Sports &#10070; 2023</ExtraListHeader>
            <ExtraListDescription>
                <li>Participated in intramural soccer at the University of New Hampshire in
                    the fall.
                </li>
            </ExtraListDescription>
            <ExtraListHeader>Computer Science Club &#10070; Boston Univeristy &#10070; Spring 2025-
                Fall 2025</ExtraListHeader>
            <ExtraListDescription>
                <li>Participated in BU's Computer Science Club.</li>
            </ExtraListDescription>
            <ExtraListHeader>Intramural Soccer &#10070; Boston University &#10070; Fall 2025</ExtraListHeader>
            <ExtraListDescription>
                <li>Participated in intramural soccer at the Boston university in
                    the fall.
                </li>
            </ExtraListDescription>
            <ExtraListHeader>BU Outing Club &#10070; Spring 2025 &#10070; Boston, MA</ExtraListHeader>
            <ExtraListDescription>
                <li>Participated in Boston University's outdoor recreation club.</li>
            </ExtraListDescription>
        </>
    )
}