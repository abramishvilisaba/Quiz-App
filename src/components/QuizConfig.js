import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateQuestions } from "../slices/questionsSlice";
import { updateSettings } from "../slices/settingsSlice";
import { fetchTriviaQuestions } from "../utilities";

import axios from "axios";

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

const InputContainer = styled.div`
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    background-color: white;
    gap: 4px;
    margin: 10px 0px;
    min-height: 70px;
`;

const InputRange = styled.input`
    padding: 0px;
    cursor: pointer;
    margin: 12px 0px 10px 0px;
`;

const InputText = styled.input`
    padding: 0px;
    cursor: pointer;
`;

const Select = styled.select`
    padding: 10px;
    border-radius: 10px;
`;

const Button = styled.button`
    padding: 10px;
    border-radius: 10px;
    height: 40px;
    width: 100%;
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
    justify-content: space-between;
    gap: 20px;
    align-items: center;
`;

const Label = styled.label`
    margin: 2px 0px;
`;

export default function QuizConfig() {
    const categories = [
        { id: 9, name: "General Knowledge" },
        { id: 10, name: "Entertainment: Books" },
        { id: 11, name: "Entertainment: Film" },
        { id: 12, name: "Entertainment: Music" },
        { id: 13, name: "Entertainment: Musicals & Theatres" },
        { id: 14, name: "Entertainment: Television" },
        { id: 15, name: "Entertainment: Video Games" },
        { id: 16, name: "Entertainment: Board Games" },
        { id: 17, name: "Science & Nature" },
        { id: 18, name: "Science: Computers" },
        { id: 19, name: "Science: Mathematics" },
        { id: 20, name: "Mythology" },
        { id: 21, name: "Sports" },
        { id: 22, name: "Geography" },
        { id: 23, name: "History" },
        { id: 24, name: "Politics" },
        { id: 25, name: "Art" },
        { id: 26, name: "Celebrities" },
        { id: 27, name: "Animals" },
        { id: 28, name: "Vehicles" },
        { id: 29, name: "Entertainment: Comics" },
        { id: 30, name: "Science: Gadgets" },
        { id: 31, name: "Entertainment: Japanese Anime & Manga" },
        { id: 32, name: "Entertainment: Cartoon & Animations" },
    ];

    const types = ["multiple", "boolean"];

    const difficulties = ["easy", "medium", "hard"];

    const dispatch = useDispatch();
    const settings = useSelector((state) => state.settings);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        dispatch(updateSettings({ [name]: value }));
    };

    const handleCategoryChange = (e) => {
        const { name, value } = e.target;
        const category = categories.find((category) => category.name === value);
        dispatch(updateSettings({ [name]: category }));
    };

    const SelectInput = ({ name, value, onChange, options, placeholder }) => (
        <Select name={name} value={value} onChange={onChange}>
            <option value="" disabled hidden>
                {placeholder}
            </option>
            {options.map((option) => (
                <option value={option} key={option}>
                    {option}
                </option>
            ))}
        </Select>
    );

    return (
        <MainContainer>
            <h2>QuizConfig</h2>
            <Row>
                <InputContainer>
                    <Label>category: {settings.category.name}</Label>
                    <SelectInput
                        name="category"
                        value={settings.category.name}
                        onChange={handleCategoryChange}
                        options={categories.map((category) => category.name)}
                        placeholder="Select Category"
                    />
                </InputContainer>
                <InputContainer>
                    <Label>Number of questions: {settings.numberOfQuestions}</Label>
                    <InputRange
                        name="numberOfQuestions"
                        type="range"
                        min="5"
                        max="15"
                        step="1"
                        value={settings.numberOfQuestions}
                        onInput={handleChange}
                    />
                </InputContainer>
            </Row>
            <Row>
                <InputContainer>
                    <Label>Difficulty: {settings.difficulty}</Label>
                    <SelectInput
                        name="difficulty"
                        value={settings.difficulty}
                        onChange={handleChange}
                        options={difficulties}
                        placeholder="Select Difficulty"
                    />
                </InputContainer>
                <InputContainer>
                    <Label>Type: {settings.type}</Label>
                    <SelectInput
                        name="type"
                        value={settings.type}
                        onChange={handleChange}
                        options={types}
                        placeholder="Select Type"
                    />
                </InputContainer>
            </Row>
            <Row>
                <InputContainer>
                    <Label>Time: {settings.time}</Label>
                    <SelectInput
                        name="time"
                        value={settings.time}
                        onChange={handleChange}
                        options={["1m", "2m", "5m"]}
                        placeholder="Select Time"
                    />
                </InputContainer>
                <InputContainer>
                    <Row>
                        {/* <Link to={"/quiz"}> */}
                        <Button
                            onClick={() =>
                                fetchTriviaQuestions(settings, dispatch, navigate, updateQuestions)
                            }
                        >
                            Start
                        </Button>
                        {/* </Link> */}
                        <Link to={"/statistics"}>
                            <Button>Statistics</Button>
                        </Link>
                    </Row>
                </InputContainer>
            </Row>
        </MainContainer>
    );
}
