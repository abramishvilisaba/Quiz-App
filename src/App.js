import QuizPage from "./pages/QuizPage";
import styled, { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
body {
  background-color: #F0F0F0;
  margin: 0;
  padding: 0;
  box-sizing:border-box;
}
`;
function App() {
    return (
        <div className="App">
            <GlobalStyle />
            <QuizPage />
        </div>
    );
}

export default App;
