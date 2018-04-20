import React from 'react';
import PropTypes from 'prop-types';
import Label from './Label';
import { PropTypeCheckerOnChange } from '../utils'

class Input extends React.Component {
	render() {
		const _id = Math.random()
		let _className = this.props.pull ? ` u-pull-${this.props.pull}` : ''

		return (
      <div className={_className}>
				{this.props.label ? (<Label forId={_id} text={this.props.label} />) : null}
				<input
					type={this.props.type}
					style={this.props.style}
					className='u-full-width'
					placeholder={this.props.placeholder}
					id={_id}
					onChange={this.props.onChange}
					/>
      </div>
		);
	}
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
