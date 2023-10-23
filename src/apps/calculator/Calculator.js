import { useState } from "react"
import { Frame, Output, Result, Calculation, ButtonsWraper, Button, BlackButton, ButtonEquals } from "./CalculatorStyle"



const Calculator = () => {

    const [prevInput, setPrevInput] = useState("")
    const [input, setInput] = useState("")

    const test = (e) => {
        let numberKey = +e.target.innerHTML
        if (isNaN(numberKey) === false) {
            setPrevInput(+prevInput+(+e.target.innerHTML));
        }
        setInput(input+(e.target.innerHTML))
    }

    return (
        <Frame>
            <Output>
                <Result>{prevInput}</Result>
                <Calculation>{input}</Calculation>
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
                <Button red="true" onClick={test}>C</Button>
                <Button onClick={test}>7</Button>
                <Button onClick={test}>8</Button>
                <Button>9</Button>
                <Button>÷</Button>
                <Button orange="true">&lt;=</Button>
                <Button>4</Button>
                <Button>5</Button>
                <Button>6</Button>
                <Button>×</Button>
                <ButtonEquals>=</ButtonEquals>
                <Button>1</Button>
                <Button>2</Button>
                <Button>3</Button>
                <Button>-</Button>
                <Button>E</Button>
                <Button>0</Button>
                <Button>.</Button>
                <Button onClick={test}>+</Button>
            </ButtonsWraper>
        </Frame>
    )
}

export default Calculator