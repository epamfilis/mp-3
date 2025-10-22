import styled from "styled-components";
import Calculator from "../Calculator.tsx";


const ProjTitle = styled.h2`
    margin-top: 2%;
    margin-bottom: 2%;
`
const ProjListHeader = styled.h3`
    margin-top: 4%;
    margin-left: 5%;
    text-align: left;`

const ProjListDescription = styled.ul`
    margin-top: 1%;
    margin-left: 1%;
    list-style: none;
    text-align: left;
    padding-right: 8%;`



export default function Projects() {
    return (
        <>
            <title>Projects | Resume</title>
            <ProjTitle>Projects</ProjTitle>
            <ProjListHeader>Network Dashboard &#10070; Spring 2025</ProjListHeader>
            <ProjListDescription>
                <li>Built a custom network dashboard intended for personal use.</li>
            </ProjListDescription>
            <ProjListHeader>Healthcare App &#10070; Fall 2025</ProjListHeader>
            <ProjListDescription>
                <li>Built an app that helps people find doctors near them.</li>
            </ProjListDescription>

            <Calculator />
        </>

    )
}