import React, { useState, useEffect } from "react";
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
    const [settings, setSettings] = useState({
        category: "",
        numberOfQuestions: 5,
        difficulty: 1,
        type: "",
        time: "",
    });

    const arr = [1, 2, 3, 4, 5];

    const handleChange = (e) => {
        setSettings({ ...settings, [e.target.name]: e.target.value });
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
        <>
            <MainContainer>
                <h2>QuizConfig</h2>
                <Row>
                    <InputContainer>
                        <Label>category: {settings.category}</Label>
                        <SelectInput
                            name="category"
                            value={settings.category}
                            onChange={handleChange}
                            options={arr}
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
                        <InputRange
                            name="difficulty"
                            type="range"
                            min="1"
                            max="5"
                            step="1"
                            value={settings.difficulty}
                            onInput={handleChange}
                        />
                    </InputContainer>
                    <InputContainer>
                        <Label>Type: {settings.type}</Label>
                        <SelectInput
                            name="type"
                            value={settings.type}
                            onChange={handleChange}
                            options={arr}
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
                            <Button onClick={() => console.log(settings)}>Start</Button>
                            <Button>Results</Button>
                        </Row>
                    </InputContainer>
                </Row>
            </MainContainer>
        </>
    );
}
