import React from "react";
import PropTypes from "prop-types";


/**
 *
 * @type {{options: {style: string, close: boolean}, text: string}}
 */
const defaultProps = {
    text: ' A simple primary alert—check it out!',
    options : {
        style : 'alert-primary',
        close : false
    }
};

/**
 *
 * @param text
 * @param options
 * @returns {*}
 * @constructor
 */
const Alert = ({text , options}) => {

    options = {...Alert.defaultProps.options, ...options };
    return (
        <div className={ "alert " + options.style} role="alert">
            {text}
            { options.close &&
            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>}
        </div>
    );
};

/**
 *
 * @type {{options: *, text: *}}
 */
Alert.propTypes = {
    text: PropTypes.string.isRequired,
    options: PropTypes.object.isOptional
};


Alert.defaultProps = defaultProps;

export default Alert;
