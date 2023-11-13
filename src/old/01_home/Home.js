import { MainWrapper, LeftWrapper, RightWrapper, Title, TopBox, BottomBox, DataBox, Bold, SmallBox, HeadingDataBox, HeaderSmallBox, BodySmallBox, Icon } from "./HomeStyle";
import calculator from "../../assets/calculator.png"
import todo from "../../assets/todo.png"
import quiz from "../../assets/quiz.png"
import noughts from "../../assets/noughts.png"
import movies from "../../assets/movies.png"
import cards from "../../assets/cards.png"
import quotes from "../../assets/quotes.png"

const Home = () => {
    return (
        <MainWrapper>
            <LeftWrapper>
                <Title>Hiya, visitor</Title>
                <TopBox>
                    This website is a showcase of my projects. Click buttons on the right to open them.
                </TopBox>
                <BottomBox>
                    <DataBox>
                        <HeadingDataBox>Applications:</HeadingDataBox>
                        <Bold>Calculator</Bold> - standard calculator<br/>
                        <Bold>ToDo List</Bold> - standard calculator<br/>
                        <Bold>Quiz</Bold> - standard calculator<br/>
                        <Bold>Noughts and Crosses</Bold> - standard calculator<br/>
                        <Bold>Movies</Bold> - standard calculator<br/>
                        <Bold>FlashCards</Bold> - standard calculator<br/>
                        <Bold>Random Quotes</Bold> - fetches data from API<br/>
                    </DataBox>
                    <DataBox>
                    <HeadingDataBox>TechStack:</HeadingDataBox>
                        <Bold>React</Bold> - standard calculator<br/>
                        <Bold>React Router</Bold> - standard calculator<br/>
                        <Bold>Redux</Bold> - standard calculator<br/>
                        <Bold>Styled Components</Bold> - standard calculator<br/>
                        <Bold>Figma</Bold> - standard calculator<br/>
                    </DataBox>
                </BottomBox>
            </LeftWrapper>
            <RightWrapper>
                <SmallBox>
                    <HeaderSmallBox></HeaderSmallBox>
                    <BodySmallBox><Icon src={calculator}/></BodySmallBox>
                </SmallBox>
                <SmallBox>
                    <HeaderSmallBox></HeaderSmallBox>
                    <BodySmallBox><Icon src={todo}/></BodySmallBox>
                </SmallBox>
                <SmallBox>
                    <HeaderSmallBox></HeaderSmallBox>
                    <BodySmallBox><Icon src={quiz}/></BodySmallBox>
                </SmallBox>
                <SmallBox>
                    <HeaderSmallBox></HeaderSmallBox>
                    <BodySmallBox><Icon src={noughts}/></BodySmallBox>
                </SmallBox>
                <SmallBox>
                    <HeaderSmallBox></HeaderSmallBox>
                    <BodySmallBox><Icon src={movies}/></BodySmallBox>
                </SmallBox>
                <SmallBox>
                    <HeaderSmallBox></HeaderSmallBox>
                    <BodySmallBox><Icon src={cards}/></BodySmallBox>
                </SmallBox>
                <SmallBox>
                    <HeaderSmallBox></HeaderSmallBox>
                    <BodySmallBox><Icon src={quotes}/></BodySmallBox>
                </SmallBox>
            </RightWrapper>
        </MainWrapper>
    )
}

export default Home