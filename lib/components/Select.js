import React from 'react';
import PropTypes from 'prop-types';
import Label from './Label';
import { PropTypeCheckerOnChange } from '../utils'

class Select extends React.Component {
	render() {
		const _id = Math.random()
		let _className = this.props.pull ? ` u-pull-${this.props.pull}` : ''
		_className += ' u-full-width'

		return (
      <div>
				{this.props.label ? (<Label forId={_id} text={this.props.label} />) : null}
				<select
					className={_className}
					placeholder={this.props.placeholder}
					id={_id}
					onChange={this.props.onChange}
					value={this.props.value}
					>
					{
						!this.props.options.length
							? this.props.children
							: this.props.options.map(o =>
									(<option key={o.value} value={o.value}>{o.text}</option>)
								)
					}
				</select>
      </div>
		);
	}
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
