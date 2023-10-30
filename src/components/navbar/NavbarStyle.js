import styled from "styled-components";
import { Link } from "react-router-dom";

const Bar = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding: 0 200px;
    height: 80px;
    background-color: green;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 99;
`

const Title = styled.h1`
    color: white;
    font-weight: bold;
    font-size: 1.5rem;
`

const MenuWrapper = styled.div`
    width: 500px;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const MenuItem = styled(Link)`
    text-decoration: none;
    font-size: 1.2rem;
    padding: 20px 15px;
    border-radius: 5px;
    color: white;
    cursor: pointer;
    transition: background-color 0.3s ease-in-out;
    &:hover {
        background-color: darkgreen;
    }
    &:active {
        color: black;
    }
`

export {Bar, Title, MenuWrapper, MenuItem}