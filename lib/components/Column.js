import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

const columns = [
	{
		id: '1/3',
		value: 'one-third'
	},
	{
		id: '2/3',
		value: 'two-thirds'
	},
	{
		id: '1/2',
		value: 'one-half'
	},
	{
		id: 1,
		value: 'one'
	},
	{
		id: 2,
		value: 'two'
	},
	{
		id: 3,
		value: 'three'
	},
	{
		id: 4,
		value: 'four'
	},
	{
		id: 5,
		value: 'five'
	},
	{
		id: 6,
		value: 'six'
	},
	{
		id: 7,
		value: 'seven'
	},
	{
		id: 8,
		value: 'eight'
	},
	{
		id: 9,
		value: 'nine'
	},
	{
		id: 10,
		value: 'ten'
	},
	{
		id: 11,
		value: 'eleven'
	},
	{
		id: 12,
		value: 'twelve'
	}
];

class Column extends PureComponent {
	convertNumberToText(num) {
		return (
			columns.find((el) => el.id === num)
		)
	}

	getClassName = (size) => {
		return `${this.convertNumberToText(size).value} column${size > 1 ? 's' : ''}`
	}

	render() {
		if (this.props.offset && this.props.pull) {
			try { console.warn(`Column component has 'pull' & 'offset' props, use one or the other.`) } catch(e) {}
		}

		let _classNameColumn = this.getClassName(this.props.size)
		_classNameColumn += this.props.pull ? ` u-pull-${this.props.pull}` : ''

		const _Column = (
							<div
								className={_classNameColumn}
								style={this.props.style}
								>
								{this.props.children}
							</div>
						);

		if (this.props.offset > 0) {
			return (
				<div>
					<div className={this.getClassName(this.props.offset)}>&nbsp;</div>
					{_Column}
				</div>
			)
		}

		return (_Column);
	}
}

Column.defaultProps = {
	pull: '',
	style: {},
	size: 12,
	offset: 0
}

Column.propTypes = {
	pull: PropTypes.oneOf(['left', 'right', '']),
	style: PropTypes.object.isRequired,
	size: PropTypes.oneOfType([
		PropTypes.number,
		PropTypes.string
	]).isRequired,
	offset: PropTypes.number.isRequired,
}

export default Column;
