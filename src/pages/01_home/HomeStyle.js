import styled from "styled-components"
import { measurements } from "../../components/ui/Measurements"
import { colors } from "../../components/ui/Colors"

const { mainLeftRightPadding, mainTopPadding } = measurements
const { gray } = colors

const MainWrapper = styled.div`
    position: relative;
    background-color: lightgray;;
    height: 100vh;
    margin-top: 80px;
    padding: ${mainTopPadding} ${mainLeftRightPadding} 0;
    display: flex;
    justify-content: space-between;
`

const LeftWrapper = styled.div`
    width: 400px;
    height: 200px;
    background-color: ${gray}
    `
    
    const RightWrapper = styled.div`
    width: 100px;
    height: 200px;
    background-color: ${gray}
`

export { MainWrapper, LeftWrapper, RightWrapper }