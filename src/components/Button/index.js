import React from 'react';
import PropTypes from 'prop-types';

const ButtonStyle = {
  backgroundColor : '#46a049',
  color: '#fff',
  padding: '5px 25px',
  borderRadius: '2px',
  fontSize:'16px',
  border: '1px solid',
  cursor:'pointer',
}

const Button = ({text, onClick}) => {

    return (
      <button type="button" style={ButtonStyle} onClick={onClick}>
        {text}
      </button>
    );
};

Button.propTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func
};

export default Button;
