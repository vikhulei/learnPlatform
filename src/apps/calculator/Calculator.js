import { useState } from "react"
import { Frame, Output, Result, Calculation, ButtonsWraper, Button, BlackButton, ButtonEquals } from "./CalculatorStyle"



const Calculator = () => {

    const [result, setResult] = useState(0)
    const [calculation, setCalculation] = useState(0)

    const keyPress = (e) => {
        if (calculation === 0) {
            setCalculation(e.target.innerHTML)
        } else {
            setCalculation(calculation+(e.target.innerHTML))
        }
    }

    const clear = () => {
        setResult(0)
        setCalculation(0)
    }

    const equals = () => {
        setResult(eval(calculation))
    }
    
    const backSpace = () => {
        setCalculation(calculation.slice(0, -1))
    }

    return (
        <Frame>
            <Output>
                <Result>{result}</Result>
                <Calculation>{calculation}</Calculation>
            </Output>
            <ButtonsWraper>
                <BlackButton>M+</BlackButton>
                <BlackButton>M-</BlackButton>
                <BlackButton>MR</BlackButton>
                <BlackButton>MS</BlackButton>
                <BlackButton>MC</BlackButton>
                <Button>+/-</Button>
                <Button>&#40;</Button>
                <Button>&#41;</Button>
                <Button>%</Button>
                <Button red="true" onClick={clear}>C</Button>
                <Button onClick={keyPress}>7</Button>
                <Button onClick={keyPress}>8</Button>
                <Button onClick={keyPress}>9</Button>
                <Button onClick={keyPress}>/</Button>
                <Button orange="true" onClick={backSpace}>&lt;=</Button>
                <Button onClick={keyPress}>4</Button>
                <Button onClick={keyPress}>5</Button>
                <Button onClick={keyPress}>6</Button>
                <Button onClick={keyPress}>*</Button>
                <ButtonEquals onClick={equals}>=</ButtonEquals>
                <Button onClick={keyPress}>1</Button>
                <Button onClick={keyPress}>2</Button>
                <Button onClick={keyPress}>3</Button>
                <Button onClick={keyPress}>-</Button>
                <Button>E</Button>
                <Button onClick={keyPress}>0</Button>
                <Button onClick={keyPress}>.</Button>
                <Button onClick={keyPress}>+</Button>
            </ButtonsWraper>
        </Frame>
    )
}

export default Calculator

