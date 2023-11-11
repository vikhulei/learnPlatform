import { Wrapper, UpperWrapper, MiddleWrapper, TextBox, Bold, BottomWrapper, Logo } from "./FooterStyle"
import logo from "../../assets/logo.png"

const Footer = () => {
    return (
        <Wrapper>
            <UpperWrapper>
                <Logo src={logo} />
            </UpperWrapper>
            <MiddleWrapper>
                <TextBox>
                    <p><Bold>Products and Services</Bold></p>
                    <p>WEB sites</p>
                    <p>E-commerce apps</p>
                    <p>E-learning platforms</p>
                </TextBox>
                <TextBox>
                    <p><Bold>Learning Bank</Bold></p>
                    <p>JS Institute (https://edube.org/)</p>
                    <p>MDN Web docs (https://developer.mozilla.org/)</p>
                    <p>Website Templates (https://themeforest.net/)</p>
                </TextBox>
                <TextBox>
                    <p><Bold>Get in Touch</Bold></p>
                    <p>vikhulei@gmail.com</p>
                    <p>07706 204681</p>
                </TextBox>
                <TextBox>F T Y I L</TextBox>
            </MiddleWrapper>
            <BottomWrapper>
            &copy; Viktor Hulei 2023
            </BottomWrapper>
        </Wrapper>
    )
}

export default Footer