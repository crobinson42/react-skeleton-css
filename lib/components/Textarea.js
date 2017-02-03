import React from 'react';
import Label from './Label';
import { PropTypeCheckerOnChange } from '../utils'

class Textarea extends React.Component {
	render() {
		const _id = Math.random()

		return (
      <div>
				{this.props.label ? (<Label forId={_id} text={this.props.label} />) : null}
				<textarea
					className='u-full-width'
					placeholder={this.props.placeholder}
					id={_id}
					onChange={this.props.onChange}
					value={this.props.value}
					></textarea>
      </div>
		);
	}
}

Textarea.defaultProps  = {
	label: '',
	placeholder: '',
	value: ''
}

Textarea.propTypes = {
	label: React.PropTypes.string.isRequired,
	placeholder: React.PropTypes.string.isRequired,
	onChange: PropTypeCheckerOnChange,
	value: React.PropTypes.string.isRequired
}

export default Textarea;
