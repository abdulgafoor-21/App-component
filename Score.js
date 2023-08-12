import React from 'react';

const Score = ({ userAnswers }) => {
  const correctAnswers = userAnswers.filter((userAnswer, index) => userAnswer === quizData[index].correctAnswer).length;
  const totalQuestions = quizData.length;

  return (
    <div className="score">
      <p>Your Score: {correctAnswers} / {totalQuestions}</p>
    </div>
  );
};

export default Score;
