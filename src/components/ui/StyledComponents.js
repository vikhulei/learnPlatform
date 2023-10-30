import styled from "styled-components"

const BodyWrapper = styled.div`
    position: relative;
    width: 100%;
`
const NavbarWrapper = styled.div`
    position: absolute;
    height: 100px;
    z-index: 99;
`

const MainWrapper = styled.div`
    position: relative;
    background-color: #f6f0ed;
    background-color: lightgray;;
    height: 100vh;
    margin-top: 80px;
    padding: 50px 200px;;
    // width: 100vw;
    // padding: 30px;
    z-index: 0;
`

export {BodyWrapper, NavbarWrapper, MainWrapper}