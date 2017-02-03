import React from 'react';
import Label from './Label';
import { PropTypeCheckerOnChange } from '../utils'

class Select extends React.Component {
	render() {
		const _id = Math.random()

		return (
      <div>
				{this.props.label ? (<Label forId={_id} text={this.props.label} />) : null}
				<select
					className='u-full-width'
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
	label: React.PropTypes.string.isRequired,
	placeholder: React.PropTypes.string.isRequired,
	options: React.PropTypes.array.isRequired,
	onChange: PropTypeCheckerOnChange,
	value: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number,
  ])

}

export default Select;
