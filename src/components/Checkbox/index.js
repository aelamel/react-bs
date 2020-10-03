import React from 'react';
import PropTypes from 'prop-types';

const Checkbox = ({ label, onCheck, checked, disabled }) => {
  return (
    <label>
      {label}{' '}
      <input
        type="checkbox"
        onChange={onCheck}
        disabled={disabled}
        checked={checked}
      />
    </label>
  );
};

Checkbox.propTypes = {
  label: PropTypes.string.isRequired,
  onCheck: PropTypes.func.isRequired,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
};

Checkbox.defaultProps = {
  checked: false,
  disabled: false,
};

export default Checkbox;
