# App-component
import React, { useState } from 'react';
import Question from './Question';
import Score from './Score';
import Finish from './Finish';
import quizData from './quizData'; // Import your quiz data here

const App = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  
  const handleAnswerSelect = (selectedAnswer) => {
    const updatedAnswers = [...userAnswers];
    updatedAnswers[currentQuestionIndex] = selectedAnswer;
    setUserAnswers(updatedAnswers);
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    setUserAnswers([]);
  };

  const currentQuestion = quizData[currentQuestionIndex];

  if (currentQuestionIndex === quizData.length) {
    return <Finish userAnswers={userAnswers} restartQuiz={restartQuiz} />;
  }

  return (
    <div className="quiz-app">
      <h1>Quiz App</h1>
      <Score userAnswers={userAnswers} />
      <Question
        question={currentQuestion.question}
        options={currentQuestion.options}
        onAnswerSelect={handleAnswerSelect}
      />
    </div>
  );
};

export default App;
