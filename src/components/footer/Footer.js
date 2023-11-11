import { Wrapper, UpperWrapper, MiddleWrapper, TextBox, BottomWrapper, Logo } from "./FooterStyle"
import logo from "../../assets/logo.png"

const Footer = () => {
    return (
        <Wrapper>
            <UpperWrapper>
                <Logo src={logo} />
            </UpperWrapper>
            <MiddleWrapper>
                <TextBox>
                    <p><b>Products</b></p>
                    <p>What we do</p>
                    <p>What we do</p>
                    <p>What we do</p>
                </TextBox>
                <TextBox>
                    <p><b>Products</b></p>
                    <p>What we do</p>
                    <p>What we do</p>
                    <p>What we do</p>
                </TextBox>
                <TextBox>
                    <p><b>Products</b></p>
                    <p>What we do</p>
                    <p>What we do</p>
                    <p>What we do</p>
                </TextBox>
                <TextBox>F T Y I L</TextBox>
            </MiddleWrapper>
            <BottomWrapper>
                @ Viktor Hulei 2023
            </BottomWrapper>
        </Wrapper>
    )
}

export default Footer