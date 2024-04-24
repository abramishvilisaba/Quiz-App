import axios from "axios";

export const fetchTriviaQuestions = async (settings, dispatch, navigate, updateQuestions) => {
    try {
        const apiUrl = `https://opentdb.com/api.php?amount=${settings.numberOfQuestions}&category=${settings.category.id}&difficulty=${settings.difficulty}&type=${settings.type}`;
        const response = await axios.get(apiUrl);
        const questionsWithCombinedAnswers = response.data.results.map(combineQuestions);
        dispatch(updateQuestions(questionsWithCombinedAnswers));
        if (questionsWithCombinedAnswers.length > 0) {
            navigate("/quiz");
        }
    } catch (error) {
        console.log("Error:", error);
    }
};

export const combineQuestions = (question) => {
    const { correct_answer, incorrect_answers } = question;
    const randomIndex = Math.floor(Math.random() * (incorrect_answers.length + 1));
    const combined = [...incorrect_answers];
    combined.splice(randomIndex, 0, correct_answer);
    return { ...question, combined_answers: combined };
};
