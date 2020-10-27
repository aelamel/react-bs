import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

/**
 *
 * @type {{options: {isLink: boolean, style: string, isDisabled: boolean, isActive: boolean}, label: string, value: string, maxLength: number}
 */
const defaultProps = {
	options: {
		cols: 50,
		rows: 5,
		disabled: false,
		readOnly: false,
		required: false
	},
	label: '',
	value: '',
	maxLength: 100
};

/**
 *  Custom TextArea
 * @param label
 * @param value
 * @param maxLength
 * @param onChange
 * @param options
 * @returns {*}
 * @constructor
 */
const TextArea = ({ label, value, maxLength, onChange, options }) => {
	options = { ...TextArea.defaultProps.options, ...options };
	return (
		<Fragment>
			<label style={{ display: 'block' }}>{label} </label>
			<textarea
				defaultValue={value}
				cols={options.cols}
				rows={options.rows}
				onChange={onChange}
				maxlength={maxLength}
				name={options.name}
				placeholder={options.placeHolder}
				autoFocus={options.autoFocus}
				disabled={options.disabled}
				readOnly={options.readOnly}
				required={options.required}
			></textarea>
		</Fragment>
	);
};

TextArea.PropTypes = {
	label: PropTypes.string.isRequired,
	maxLength: PropTypes.number.isRequired,
	onChange: PropTypes.func.isRequired,
	value: PropTypes.string.isRequired,
	options: PropTypes.shape({
		cols: PropTypes.number,
		rows: PropTypes.number,
		name: PropTypes.string,
		placeHolder: PropTypes.string,
		autoFocus: PropTypes.bool,
		disabled: PropTypes.bool,
		readOnly: PropTypes.bool,
		required: PropTypes.bool
	})
};

TextArea.defaultProps = defaultProps;

export default TextArea;
