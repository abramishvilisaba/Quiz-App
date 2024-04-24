import styled, { createGlobalStyle } from "styled-components";
import { Routes, Route } from "react-router";
import QuizConfig from "./components/QuizConfig";
import Quiz from "./components/Quiz";
import Results from "./components/Results";
import Statistics from "./components/statistics";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./store";

import { Provider } from "react-redux";

const GlobalStyle = createGlobalStyle`
body {
  background-color: #F0F0F0;
  margin: 0;
  padding: 0;
  box-sizing:border-box;
}
`;
const MainContainer = styled.div`
    margin: auto;
    height: fit-content;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: start;
    gap: 40px;
    padding: 150px 20px;
    width: 25%;
    @media (max-width: 1400px) {
        width: 35%;
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
function App() {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <GlobalStyle />
                <MainContainer>
                    <Routes>
                        <Route path="/" element={<QuizConfig />} />
                        <Route path="/quiz" element={<Quiz />} />
                        <Route path="/results" element={<Results />} />
                        <Route path="/statistics" element={<Statistics />} />
                    </Routes>
                </MainContainer>
            </PersistGate>
        </Provider>
    );
}

export default App;
