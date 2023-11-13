import styled from "styled-components"
import CalculateIcon from '@mui/icons-material/Calculate';
import { measurements } from "../../components/ui/Measurements"
import { colors } from "../../components/ui/Colors"

const { mainLeftRightPaddingMax, mainLeftRightPaddingMin, mainTopPadding } = measurements
const { lightgray, linecolor, red, lightred, gray, lightivory, ivory } = colors

const paddingBoxes = "30px"

const MainWrapper = styled.div`
    position: relative;
    margin-top: 80px;
    padding: ${mainTopPadding} clamp(${mainLeftRightPaddingMax}, 5%, ${mainLeftRightPaddingMin}) 0;
    padding: ${mainTopPadding} max(100px, 10vw);
    background-color: ${lightgray};
    display: flex;
    justify-content: space-between;
`

const LeftWrapper = styled.div`
    width: 700px;
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
    background-color: ${lightivory};
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
    background-color: ${lightivory};
    transition: transform 50ms ease-in-out;
    &:hover {
        cursor: pointer;
        background-color: ${ivory};
    }
    &:active {
        transform: translate(1px, 3px);
    }
`

const HeaderSmallBox = styled.div`
    width: 40px;
    height: 100%;
    background-color: ${lightred};
    background-color: ${red};
    color: black;
    font-size: 1.2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 2px ${ivory};
`
const BodySmallBox = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 2px ${ivory};
`

const Icon = styled.img`
    width: 45px;
`


export { MainWrapper, LeftWrapper, RightWrapper, Title, TopBox, BottomBox, DataBox, Bold, SmallBox, HeadingDataBox, HeaderSmallBox, BodySmallBox, Icon  }