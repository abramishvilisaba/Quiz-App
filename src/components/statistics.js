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
    border: 5px red;
    &:hover {
        background-color: ${primaryColorLight};
    }
`;

const Row = styled.div`
    width: 100%;
    display: flex;
    height: 100%;
    flex-direction: row;
    justify-content: center;
    gap: 20px;
    align-items: center;
    margin: 10px 0px;
`;

const Header = styled.h2`
    text-align: center;
`;
const Text = styled.p`
    text-align: left;
    margin: 5px 0px;
`;

export default function Statistics() {
    const { questions, correct, categories, difficulties, types } = useSelector(
        (state) => state.statistics
    );

    return (
        <MainContainer>
            <Header>Statistics:</Header>

            <Row>
                <div>
                    <Text>Questions:</Text>
                    <Text>{questions}</Text>
                </div>
                <div>
                    <Text>Correct: </Text>
                    <Text>{correct}</Text>
                </div>

                <div>
                    <Text>Difficulties:</Text>
                    {Object.entries(difficulties).map(([difficulty, count]) => (
                        <Text key={difficulty}>
                            {difficulty}: {count}
                        </Text>
                    ))}
                </div>
            </Row>
            <Row>
                <div>
                    <Text>Categories:</Text>
                    {Object.entries(categories).map(([category, count]) => (
                        <Text key={category}>
                            {category}: {count}
                        </Text>
                    ))}
                </div>
                <div>
                    <Text>Types:</Text>
                    {Object.entries(types).map(([type, count]) => (
                        <Text key={type}>
                            {type}: {count}
                        </Text>
                    ))}
                </div>
            </Row>
            <Row>
                <Link to={"/"}>
                    <Button>Back</Button>
                </Link>
            </Row>
        </MainContainer>
    );
}
