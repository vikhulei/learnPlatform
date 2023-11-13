import styled from "styled-components"
import { css } from "styled-components"

const Frame = styled.div`
    position: relative;
    width: 220px;
    height: 320px;
    background-color: #595959;
    padding: 5px;
    display: flex;
    flex-direction: column;
    gap: 5px;
`
const Output = styled.div`
    position: relative;
    width: 100%;
    height: 70px;
    background-color: black;
    border-radius: 5px;
    padding: 5px;
`

const Result = styled.div`
    width: 100%;
    height: 50%;
    color: white;
    background-color: #242424;
    display: flex;
    align-items: center;
    justify-content: right;
    font-weight: 300;
    font-size: 1.6rem;
`

const Calculation = styled(Result)`
    color: #25639e;
    background-color: black;
    font-size: 1.2rem;
`
const ButtonsWraper = styled.div`
    width: 100%;
    height: 100%;
    border: 3px solid black;
    border-radius: 5px;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(6, 1fr);
    grid-column: 1 / 3;
`
const Button = styled.button`
    background-color: darkblue;
    border-radius: 5px;
    color: white;
    ${props => props.red && css`
        background-color: red;
    `}
    ${props => props.orange && css`
        background-color: orange;
    `}
`

const BlackButton = styled(Button)`
    background-color: black;
`

const ButtonEquals = styled(Button)`
    grid-column: 5;
    grid-row: 4 / 7;
`

export { Frame, Output, Result, Calculation, ButtonsWraper, Button, BlackButton, ButtonEquals }
