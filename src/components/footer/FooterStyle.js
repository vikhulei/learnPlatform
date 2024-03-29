import styled from "styled-components"
import { colors } from "../ui/Colors"
import { measurements } from "../ui/Measurements"

const { darkred, darkgray, darkivory } = colors
const { mainLeftRightPaddingMax, mainLeftRightPaddingMin } = measurements
const paddingTopBottom = "30px"

const Wrapper = styled.div`
    poistion: relative;
    background-color: ${darkivory};
    color: ${darkgray};
    color: white;
`

const UpperWrapper = styled.div`
    padding: ${paddingTopBottom} clamp(${mainLeftRightPaddingMax}, 5%, ${mainLeftRightPaddingMin}) 0;
    display: flex;
    align-items: center;
`

const MiddleWrapper = styled.div`
    padding: ${paddingTopBottom} clamp(${mainLeftRightPaddingMax}, 5%, ${mainLeftRightPaddingMin});
    display: flex;
    gap: 120px;
    // justify-content: space-between;
`

const TextBox = styled.div`
    font-size: 1.2rem;
    line-height: 1.5;
`

const Bold = styled.span`
    font-weight: 700;
`

const BottomWrapper = styled.div`
    padding: ${paddingTopBottom} max(${mainLeftRightPaddingMax}, ${mainLeftRightPaddingMin});
    border-top: solid 1px white;
    display: flex;
    align-items: center;
`

const Logo = styled.img`
    height: 70px;
`



export { Wrapper, UpperWrapper, MiddleWrapper, TextBox, Bold, BottomWrapper, Logo  }