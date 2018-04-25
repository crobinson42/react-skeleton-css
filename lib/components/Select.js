import React from 'react';
import PropTypes from 'prop-types';
import Label from './Label';
import { PropTypeCheckerOnChange } from '../utils'

const Select = ({ pull, label, placeholder, onChange, value, options, ...props }) => {
	const _id = Math.random()
	let _className = pull ? ` u-pull-${pull}` : ''
	_className += ' u-full-width'

	return (
		<div>
			{label ? (<Label forId={_id} text={label} />) : null}
			<select
				className={_className}
				placeholder={placeholder}
				id={_id}
				onChange={onChange}
				value={value}
				>
				{
					!options.length
						? props.children
						: options.map(o =>
								(<option key={o.value} value={o.value}>{o.text}</option>)
							)
				}
			</select>
		</div>
	);
}

Select.defaultProps  = {
	label: '',
	placeholder: '',
	options: [],
}

Select.propTypes = {
	label: PropTypes.string.isRequired,
	placeholder: PropTypes.string.isRequired,
	options: PropTypes.array.isRequired,
	onChange: PropTypeCheckerOnChange,
	value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ])

}

export default Select;
