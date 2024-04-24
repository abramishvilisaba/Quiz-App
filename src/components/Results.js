import React from "react";
import styled from "styled-components";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const primaryColor = "#1E33A9";
const primaryColorLight = "#212799";

const MainContainer = styled.div`
    width: 100%;
    margin: 0 auto;
    height: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: white;
    border-radius: 20px;
    box-shadow: 5px 5px 5px gray;
    align-items: center;
    padding: 40px;
`;

const Button = styled.button`
    padding: 10px;
    border-radius: 10px;
    height: 40px;
    width: fit-content;
    background-color: ${primaryColor};
    color: white;
    cursor: pointer;
    border: none;
    &:hover {
        background-color: ${primaryColorLight};
    }
`;

const SettingsRow = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 20px;
    align-items: center;
    margin: 10px 0px;
`;

const QuestionsColumn = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

const Header = styled.h2`
    text-align: center;
`;

const Text = styled.p`
    text-align: left;
    margin: 5px 0px;
`;

export default function Results() {
    const { category, difficulty, numberOfQuestions, type, time } = useSelector(
        (state) => state.settings
    );
    const questions = useSelector((state) => state.questions);
    const results = useSelector((state) => state.results);

    const statistics = useSelector((state) => state.statistics);

    if (!(category && questions && questions.length > 0)) {
        return null;
    }

    return (
        <MainContainer>
            <Header>Thank you for completing this quiz. Here are your results:</Header>
            <SettingsRow>
                <Text>Type: {type}</Text>
                <Text>Category: {category.name}</Text>
                <Text>Difficulty: {difficulty}</Text>
                <Text>Number of Questions: {numberOfQuestions}</Text>
                <Text>Time Spent: {time}</Text>
            </SettingsRow>
            <Header>Quiz Questions and Answers</Header>
            <QuestionsColumn>
                {questions.map((question, index) => (
                    <div key={index}>
                        <Text>
                            {index + 1}: {question.question}
                        </Text>
                        <Text>Correct Answer: {question.correct_answer}</Text>
                        <Text>Your Answer: {results.selectedAnswers[index]}</Text>
                        {/* <Text> {results.answers[index]}</Text> */}
                    </div>
                ))}
            </QuestionsColumn>
            <SettingsRow>
                <Link to={"/quiz"}>
                    <Button>Restart</Button>
                </Link>
                <Link to={"/"}>
                    <Button>Choose another quiz</Button>
                </Link>
            </SettingsRow>
        </MainContainer>
    );
}
