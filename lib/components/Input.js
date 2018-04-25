import React from 'react';
import PropTypes from 'prop-types';
import Label from './Label';
import { PropTypeCheckerOnChange } from '../utils'

const Input = ({ pull, label, type, style, placeholder, onChange }) => {
	const _id = Math.random()
	let _className = pull ? ` u-pull-${pull}` : ''

	return (
		<div className={_className}>
			{label ? (<Label forId={_id} text={label} />) : null}
			<input
				type={type}
				style={style}
				className='u-full-width'
				placeholder={placeholder}
				id={_id}
				onChange={onChange}
				/>
		</div>
	);
}

Input.defaultProps  = {
	pull: '',
	label: '',
	placeholder: '',
	type: 'text',
	style: {},
	value: ''
}

Input.propTypes = {
	pull: PropTypes.oneOf(['left', 'right', '']),
	label: PropTypes.string.isRequired,
	placeholder: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
	onChange: PropTypeCheckerOnChange,
	style: PropTypes.object.isRequired,
	value: PropTypes.string
}

export default Input;
