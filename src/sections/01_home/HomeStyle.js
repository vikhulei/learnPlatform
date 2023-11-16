import styled from "styled-components";
import { measurements } from "../../components/ui/Measurements";

const { navbarHeight } = measurements;

const Wrapper = styled.div`
    position: relative;
    margin-top: ${navbarHeight};
    height: 400px;
    background-color: coral;
`

export { Wrapper }