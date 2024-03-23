import React from "react";
import styled from "styled-components";
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

export default function Results() {
    return (
        <MainContainer>
            <Header>Thank you for completing this quiz. Here are your results:</Header>
            <Text>Results:</Text>
            <Text>Results</Text>
            <Row>
                <div>
                    <Text>Configuration:</Text>
                    <Text>Configuration</Text>
                </div>
                <div>
                    <Text>Type: </Text>
                    <Text>Type</Text>
                </div>
                <div>
                    <Text>Category: </Text>
                    <Text>Category</Text>
                </div>
                <div>
                    <Text>Time: </Text>
                    <Text>Time</Text>
                </div>
                <div>
                    <Text>Difficulty: </Text>
                    <Text>Difficulty</Text>
                </div>
            </Row>
            <Row>
                <Button>Restart</Button>
                <Button>Choose another quiz</Button>
            </Row>
        </MainContainer>
    );
}
