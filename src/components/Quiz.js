import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateResults } from "../slices/resultsSlice";
import { updateStatistics } from "../slices/statisticsSlice";

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
    width: 150px;
    background-color: ${primaryColor};
    color: white;
    cursor: pointer;
    border: 5px red;
    margin-bottom: 20px;
    &:hover {
        background-color: ${primaryColorLight};
    }
`;

const ModalContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ModalContent = styled.div`
    background-color: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    text-align: center;
`;

const ModalButtonsContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 20px;
`;

const ModalButton = styled.button`
    margin: 0 10px;
    padding: 8px 16px;
    border-radius: 5px;
    background-color: ${primaryColor};
    color: white;
    cursor: pointer;
    border: none;
    &:hover {
        background-color: ${primaryColorLight};
    }
`;

const QuestionContainer = styled.div`
    width: 100%;
    text-align: left;
    margin-bottom: 20px;
`;

const Question = styled.h3`
    margin-bottom: 10px;
`;

const Option = styled.div`
    margin-bottom: 5px;
`;

export default function Quiz() {
    const [showModal, setShowModal] = useState(false);
    const [selectedAnswers, setSelectedAnswers] = useState({});
    const [time, setTime] = useState(null);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const settings = useSelector((state) => state.settings);
    const questions = useSelector((state) => state.questions);

    useEffect(() => {
        if (settings.time) {
            const Seconds = parseInt(settings.time) * 60;
            setTime(Seconds);

            const timer = setInterval(() => {
                setTime((prevTime) => {
                    if (prevTime === 0) {
                        handleConfirm();
                        return 0;
                    }
                    return prevTime - 1;
                });
            }, 1000);

            return () => clearInterval(timer);
        }
    }, [settings.time]);

    const handleEndQuiz = () => {
        setShowModal(true);
    };

    const handleClose = () => {
        setShowModal(false);
    };

    const calculateResults = () => {
        const newResults = {};

        questions.forEach((questionData, i) => {
            if (selectedAnswers[i] === questionData.correct_answer) {
                newResults[i] = "true";
            } else {
                newResults[i] = "false";
            }
        });

        return newResults;
    };

    const handleConfirm = () => {
        let results = calculateResults();
        dispatch(updateResults({ answers: results, selectedAnswers: selectedAnswers }));
        dispatch(updateStatistics({ results: results, questions: questions }));

        setShowModal(false);
        navigate("/results");
    };

    const handleOptionSelect = (questionIndex, selectedOption) => {
        setSelectedAnswers({
            ...selectedAnswers,
            [questionIndex]: selectedOption,
        });
    };

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes.toString().padStart(2, "0")}:${remainingSeconds
            .toString()
            .padStart(2, "0")}`;
    };

    if (!(settings && questions && questions.length > 0)) {
        return null;
    }

    return (
        <MainContainer>
            <h2>Quiz</h2>

            <div>Time Left: {formatTime(time)}</div>

            {questions.map((questionData, index) => (
                <QuestionContainer key={index}>
                    <Question>{questionData.question}</Question>
                    {questionData.combined_answers.map((option, optionIndex) => (
                        <Option key={optionIndex}>
                            <input
                                type="radio"
                                name={`question_${index}`}
                                value={option}
                                checked={selectedAnswers[index] === option}
                                onChange={() => handleOptionSelect(index, option)}
                            />
                            <label>{option}</label>
                        </Option>
                    ))}
                </QuestionContainer>
            ))}

            <Button onClick={handleEndQuiz}>End quiz</Button>

            {showModal && (
                <ModalContainer>
                    <ModalContent>
                        <p>Are you sure you want to end the quiz?</p>
                        <ModalButtonsContainer>
                            <ModalButton onClick={handleClose}>Cancel</ModalButton>
                            <ModalButton onClick={handleConfirm}>Confirm</ModalButton>
                        </ModalButtonsContainer>
                    </ModalContent>
                </ModalContainer>
            )}
        </MainContainer>
    );
}
