import PropTypes from 'prop-types';
import Btn from './Button_Style';
import React from 'react';

const Button = ({ type, clickBtn, children }) => { 
  return (
    <Btn type={type} onClick={clickBtn}>
      {children}
    </Btn>
  );
};

Button.propTypes = {
  type: PropTypes.string.isRequired,
  clickBtn: PropTypes.func,
};

export default Button;
