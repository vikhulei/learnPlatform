import styled from "styled-components";
import { measurements } from "../../components/ui/Measurements";

const { marginTopSection } = measurements;

const Wrapper = styled.div`
    position: relative;
    // margin-top: ${marginTopSection};
    height: 400px;
    background-color: coral;
    font-size: 2rem;
    font-weight: bold;
    font-family: arial;
`

export { Wrapper }