import React from 'react';

const Options = ({ options, selectedAnswer, onOptionSelect }) => {
  return (
    <ul className="options">
      {options.map((option, index) => (
        <li
          key={index}
          className={selectedAnswer === option ? 'selected' : ''}
          onClick={() => onOptionSelect(option)}
        >
          {option}
        </li>
      ))}
    </ul>
  );
};

export default Options;
