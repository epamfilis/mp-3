import styled from 'styled-components';

const EduTitle = styled.h2`
    margin-top: 2%;
    margin-bottom: 2%;
`
const EduListHeader = styled.h3`
    margin-top: 4%;
    margin-left: 5%;
    text-align: left;`

const EduListDescription = styled.ul`
    margin-top: 1%;
    margin-left: 1%;
    list-style: none;
    text-align: left;
    padding-right: 8%;`

export default function Education() {
    return (
        <>
            <title>Education | Resume</title>
            <EduTitle>Education</EduTitle>
            <EduListHeader>Chelmsford High School  &#10070;  Chelmsford, MA  &#10070;
                September 2019 - May 2023</EduListHeader>
            <EduListDescription>
                <li>Participated in a variety of college preparatory, honors, and advanced
                    placement coursework including Programming, AP Biology, and AP US
                    History.
                </li>
            </EduListDescription>
            <EduListHeader>
                University of New Hampshire &#10070; Durham, NH &#10070;
                September 2023 - June 2024
            </EduListHeader>
            <EduListDescription>
                <li>Finished two semesters in UNH’s computer science program, achieving
                    high honors on the dean’s list.
                </li>
            </EduListDescription>
            <EduListHeader>Boston University &#10070; Boston, MA &#10070; September
                2024 - Present
            </EduListHeader>
            <EduListDescription>
                <li>Currently enrolled in Boston University's computer science program.</li>
            </EduListDescription>
        </>
    )
}