import { Frame, Output, Result, Calculation, ButtonsWraper, Button, BlackButton, ButtonEquals } from "./CalculatorStyle"

const Calculator = () => {
    return (
        <Frame>
            <Output>
                <Result>
                    <p>4</p>
                </Result>
                <Calculation>
                    <p>2+2</p>
                </Calculation>
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
                <Button red>C</Button>
                <Button>7</Button>
                <Button>8</Button>
                <Button>9</Button>
                <Button>÷</Button>
                <Button orange>&lt;=</Button>
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
                <Button>+</Button>
            </ButtonsWraper>
        </Frame>
    )
}

export default Calculator