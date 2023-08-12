import React from 'react';

const Finish = ({ userAnswers, restartQuiz }) => {
  const correctAnswers = userAnswers.filter((userAnswer, index) => userAnswer === quizData[index].correctAnswer).length;
  const totalQuestions = quizData.length;

  return (
    <div className="finish">
      <h2>Quiz Finished!</h2>
      <p>Your Score: {correctAnswers} / {totalQuestions}</p>
      <button onClick={restartQuiz}>Restart Quiz</button>
    </div>
  );
};

export default Finish;
