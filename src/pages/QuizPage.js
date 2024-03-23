import React, { useState } from "react";
import QuizConfig from "../components/QuizConfig";
import Results from "../components/Results";
import styled from "styled-components";

// const primaryColor = "#603EAB";
const Container = styled.div`
    margin: auto;
    height: fit-content;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: start;
    gap: 40px;
    padding: 200px 20px;
    width: 25%;
    @media (max-width: 1400px) {
        width: 30%;
    }

    @media (max-width: 1024px) {
        width: 40%;
    }

    @media (max-width: 768px) {
        width: 60%;
    }

    @media (max-width: 480px) {
        width: 80%;
        padding: 200px 0px;
    }

    @media (max-width: 320px) {
        width: 90%;
    }
`;

export default function QuizPage() {
    // const [settings, setSettings] = useState({});
    return (
        <>
            <Container>
                <QuizConfig />
                <Results />
            </Container>
        </>
    );
}
