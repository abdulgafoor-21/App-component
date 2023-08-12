import React, { useState } from 'react';

const Question = ({ question, options, onAnswerSelect }) => {
  const [selectedAnswer, setSelectedAnswer] = useState('');

  const handleOptionSelect = (option) => {
    setSelectedAnswer(option);
  };

  const submitAnswer = () => {
    onAnswerSelect(selectedAnswer);
    setSelectedAnswer('');
  };

  return (
    <div className="question">
      <h2>{question}</h2>
      <ul>
        {options.map((option, index) => (
          <li
            key={index}
            className={selectedAnswer === option ? 'selected' : ''}
            onClick={() => handleOptionSelect(option)}
          >
            {option}
          </li>
        ))}
      </ul>
      <button onClick={submitAnswer} disabled={!selectedAnswer}>
        Next
      </button>
    </div>
  );
};

export default Question;
