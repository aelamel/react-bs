import React, {Fragment} from 'react';
import PropTypes from 'prop-types';

const Dropdown = ({options, onSelect}) => {

    return (
        <Fragment>
            <select onChange={(e) => onSelect(e.target.value)}>
                {options.map((option, index) => (<option key={index} value={option.value}>{option.label}</option>))}
            </select>
        </Fragment>
    );
};

Dropdown.propTypes = {
    options: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string,
            value: PropTypes.number,
        })
    ),
    onSelect: PropTypes.func
};

Dropdown.defaultProps = {
    options: []
};

export default Dropdown;
