import styled from "styled-components"
import CalculateIcon from '@mui/icons-material/Calculate';
import { measurements } from "../../components/ui/Measurements"
import { colors } from "../../components/ui/Colors"

const { mainLeftRightPadding, mainTopPadding } = measurements
const { linecolor, lightred, gray, lightgray, darkgray } = colors

const paddingBoxes = "30px"

const MainWrapper = styled.div`
    position: relative;
    height: 100vh;
    margin-top: 80px;
    padding: ${mainTopPadding} ${mainLeftRightPadding} 0;
    display: flex;
    justify-content: space-between;
`

const LeftWrapper = styled.div`
    width: 700px;
    height: 600px;
    display: flex;
    flex-direction: column;
`
    
const RightWrapper = styled.div`
    width: 350px;
    height: 650px;
    padding-top: 30px;
    display: grid;
    grid-template-columns: 1fr 1fr;
`

const Title = styled.div`
    width: 100%;
    height: 100px;
    font-size: 2.3rem;
    padding: ${paddingBoxes};
    border-bottom: solid 1px ${linecolor};
    margin-bottom: 30px;
`

const TopBox = styled.div`
    box-sizing: border-box;
    width: 100%;
    max-height: 200px;
    height: 200px;
    font-size: 1.2rem;
    line-height: 1.8;
    padding: ${paddingBoxes};
    border: solid 1px ${linecolor};
    border-bottom: none;
`

const BottomBox = styled.div`
    width: 100%;
    height: 100%;
    padding: ${paddingBoxes};
    display: flex;
    justify-content: space-between;
    gap: ${paddingBoxes};
    border: solid 1px ${linecolor};
`

const DataBox = styled.div`
    width: 100%;
    height: 100%;
    line-height: 1.8;
    font-weight: 200;
    padding: ${paddingBoxes};
    padding-top: 0;
    background-color: ${lightgray};
    border: solid 1px ${linecolor};
    border-radius: 10px;
`
const Bold = styled.span`
    font-weight: 400;
`

const HeadingDataBox = styled.p `
    font-size: 1.3rem;
    font-weight: 500;
    line-height: 3.5;
`

const SmallBox = styled.div`
    width: 120px;
    height: 120px;
    display: flex;
    flex-direction: row-reverse;
    border: solid 1px ${gray};
    background-color: ${lightgray};
    &:hover {
        cursor: pointer;
        background-color: ${darkgray};
    }
    &:active {
        transition: ease-in-out;
        transform: translate(1px, 3px);
    }
`

const HeaderSmallBox = styled.div`
    width: 40px;
    height: 100%;
    background-color: ${lightred};
    color: black;
    font-size: 1.2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 2px ${darkgray};
`
const BodySmallBox = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 2px ${darkgray};
`

const Icon = styled.img`
    width: 45px;
`


export { MainWrapper, LeftWrapper, RightWrapper, Title, TopBox, BottomBox, DataBox, Bold, SmallBox, HeadingDataBox, HeaderSmallBox, BodySmallBox, Icon  }