import React from 'react';
import PropTypes from 'prop-types';
import { ButtonContainer, Button } from './FeedbackOptions.styled';

const options = ['good', 'neutral', 'bad'];

export const FeedbackOptions = ({onLeaveFeedback}) => {
  return (
    <ButtonContainer>
      {options.map(option => (
        <Button
          key={option}
          type="button"
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </Button>
      ))}
    </ButtonContainer>
  );
};

FeedbackOptions.prototype = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
}