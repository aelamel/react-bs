import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';


/**
 *
 * @type {{options: {isLink: boolean, style: string, isDisabled: boolean, isActive: boolean}, text: string}}
 */
const defaultProps = {
    options : {
        style : 'primary',
        isActive : false,
        isDisabled : false,
        isLink : false
    },
    text: 'Button'
};
/**
 *  Bs  custom Button
 * @param text
 * @param onClick
 * @param options
 * @returns {*}
 * @constructor
 */
const Button = ({text, onClick , options}) => {

    options = {...Button.defaultProps.options, ...options };
    const className = classNames(
        {
            ' link': options.isLink === true,
            ' disabled': options.isDisabled === true,
            ' active': options.isActive === true,
        }
    );

    return (
        <button
            className={'btn btn-'+options.style + className}
            type="button"
            onClick={onClick}
        >
            {text}
        </button>
    );
};
/**
 *
 * @type {{onClick: *, options: *, text: *}}
 */
Button.propTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    options: PropTypes.object
};


Button.defaultProps = defaultProps;

export default Button;
