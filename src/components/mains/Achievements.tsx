import styled from "styled-components";

const AchTitle = styled.h2`
    margin-top: 2%;
    margin-bottom: 2%;
`
const AchListHeader = styled.h3`
    margin-top: 4%;
    margin-left: 5%;
    text-align: left;`

const AchListDescription = styled.ul`
    margin-top: 1%;
    margin-left: 1%;
    list-style: none;
    text-align: left;
    padding-right: 8%;`



export default function Achievements(){
    return (
        <>
            <title>Education | Resume</title>
            <AchTitle>Achievements and Awards</AchTitle>
            <AchListHeader>
                University of New Hampshire &#10070; Dean’s List, High honors &#10070;
                Fall 2024 - Spring 2025
            </AchListHeader>
            <AchListDescription>
                <li>Achieved high honors on the UNH Dean’s List in both the fall and spring semesters with
                    a 3.8 cumulative GPA.
                </li>
            </AchListDescription>
            <AchListHeader>National Honor Society &#10070; 2022 - 2023</AchListHeader>
            <AchListDescription>
                <li>Was inducted into the National Honor Society in Junior Year of High
                    School. This was achieved through volunteer and leadership roles, as
                    well as academic performance.
                </li>
            </AchListDescription>
            <AchListHeader>
                Boston University &#10070; Dean’s List, Honors &#10070;
                Fall 2025
            </AchListHeader>
            <AchListDescription>
                <li>Achieved high honors on the BU Dean’s List in the fall semester with
                    a 3.6 GPA.
                </li>
            </AchListDescription>
        </>
    )
}