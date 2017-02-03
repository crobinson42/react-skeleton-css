import React from 'react';
import Label from './Label';
import { PropTypeCheckerOnChange } from '../utils'

class Textarea extends React.Component {
	render() {
		const _id = Math.random()
		let _className = this.props.pull ? ` u-pull-${this.props.pull}` : ''
		_className += ' u-full-width'

		return (
      <div>
				{this.props.label ? (<Label forId={_id} text={this.props.label} />) : null}
				<textarea
					className={_className}
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
	pull: '',
	label: '',
	placeholder: '',
	value: ''
}

Textarea.propTypes = {
	pull: React.PropTypes.oneOf(['left', 'right', '']),
	label: React.PropTypes.string.isRequired,
	placeholder: React.PropTypes.string.isRequired,
	onChange: PropTypeCheckerOnChange,
	value: React.PropTypes.string
}

export default Textarea;
