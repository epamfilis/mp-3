import {useState} from "react";

export function useCalculator() {
    const [inOne, setInOne] = useState("");
    const [inTwo, setInTwo] = useState("");
    const [result, setResult] = useState("");

    const calculate = (operator: string) => {
        // takes the two inputs and the operator, uses switch statement on operator, returns result as string
        const x1 = Number(inOne);
        const x2 = Number(inTwo);
        let calcResult: number;

        switch (operator) {
            case "+":
                calcResult = x1 + x2;
                break;
            case "-":
                calcResult = x1 - x2;
                break;
            case "*":
                calcResult = x1 * x2;
                break;
            case "/":
                calcResult = x1 / x2;
                break;
            case "**":
                calcResult = 1;
                for (let i = 0; i < x2; i++) {
                    calcResult *= x1;
                }
                break;
            default:
                calcResult = 0;

        }
        setResult(String(calcResult));
    }

    const clearField = () => {
        setInOne("");
        setInTwo("");
        setResult("");
    }

    return {
        inOne,
        inTwo,
        result,
        clearField,
        setInOne,
        setInTwo,
        calculate,
    }
}