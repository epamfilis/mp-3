import styled from "styled-components";
import {useCalculator} from "./useCalculator.ts";
import mathBackground from "../assets/mathbackground.jpg";

const CalcContainer = styled.div`
    background-image: url(${mathBackground});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    padding-top: 5vw;
    padding-bottom: 5vw;
    margin-top: 5vw;

    @media screen and (max-width: 750px) {
        margin-top: 20%;
    }
`;

const CalcTitle = styled.h3`
    margin-bottom: 5%;
`;

const InputContainer = styled.div`
    display: flex;
    justify-content: center;
`;

const Input = styled.input`
    width: 20%;
    height: auto;
    margin-left: 1%;
    margin-right: 1%;
    display: grid;
    margin-bottom: 1vw;
`;

const Label = styled.label`
    display: none;
`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
`;

const Button = styled.button`
    border: black solid 1px;
    border-radius: 40px;
    background-color: lightblue;
    width: 3vw;
    height: 3vw;
    font-size: calc(1vw + 1vw);
    margin-right: 0.25vw;
    margin-left: 0.25vw;
    margin-bottom: 1vw;

    @media screen and (max-width: 750px) {
        width: 7vw;
        height: 7vw;
        font-size: calc(10px + 2vw);
    }
`;

const ClearButton = styled(Button)`
    width: 7vw;
    background-color: crimson;

    @media screen and (max-width: 750px) {
        width: 14vw;
    }
`;

const OutputContainer = styled.div`
    display: flex;
    justify-content: center;
`;

const Output = styled.h2<{ $isNegative: boolean }>`
    border: 2px dotted grey;
    padding: 1vw;
    height: 4.5vw;
    min-width: 6vw;
    font-size: calc(5px + 2vw);
    // for the color change for negatives
    color: ${props => props.$isNegative ? 'red' : 'black'};  

    @media screen and (max-width: 750px) {
        min-width: 9vw;
        height: 7vw;
        font-size: calc(10px + 2vw);
    }
`;

export default function Calculator() {
    const {
        inOne,
        setInOne,
        inTwo,
        setInTwo,
        result,
        calculate,
        clearField
    } = useCalculator();

    const isNegative = Number(result) < 0;

    return (
        <CalcContainer>
            <CalcTitle>Online Calculator</CalcTitle>
            <InputContainer>
                <Label htmlFor="one">Give me a number:</Label>
                <Input
                    id="one"
                    type="number"
                    value={inOne}
                    onChange={(e) => setInOne(e.target.value)}
                />
                <Label htmlFor="two">Give me a number:</Label>
                <Input
                    id="two"
                    type="number"
                    value={inTwo}
                    onChange={(e) => setInTwo(e.target.value)}
                />
            </InputContainer>
            <ButtonContainer>
                <Button onClick={() => calculate("+")}>+</Button>
                <Button onClick={() => calculate("-")}>-</Button>
                <Button onClick={() => calculate("*")}>*</Button>
                <Button onClick={() => calculate("/")}>/</Button>
                <Button onClick={() => calculate("**")}>**</Button>
                <ClearButton onClick={clearField}>Clear</ClearButton>
            </ButtonContainer>

            <OutputContainer>
                <Output $isNegative={isNegative}>{result}</Output>
            </OutputContainer>
        </CalcContainer>
    )
}