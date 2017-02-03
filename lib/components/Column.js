import React, { Component } from 'react';

class Column extends Component {
	convertNumberToText(num) {
		num = parseInt(num) || 0
		num = num < 1 ? new Number().toFixed(4) : num

		switch(num) {
			case new Number(parseInt(1/3)).toFixed(4):
				return 'one-third'
			case new Number(parseInt(2/3)).toFixed(4):
				return 'two-thirds'
			case new Number(parseInt(1/2)).toFixed(4):
				return 'one-half'
			case 1:
				return 'one'
			case 2:
				return 'two'
			case 3:
				return 'three'
			case 4:
				return 'four'
			case 5:
				return 'five'
			case 6:
				return 'six'
			case 7:
				return 'seven'
			case 8:
				return 'eight'
			case 9:
				return 'nine'
			case 10:
				return 'ten'
			case 11:
				return 'eleven'
			case 12:
			default:
				return 'twelve'
		}
	}

	getClassName = (size) => {
		return `${this.convertNumberToText(size)} column${size > 1 ? 's' : ''}`
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
	pull: React.PropTypes.oneOf(['left', 'right', '']),
	style: React.PropTypes.object.isRequired,
	size: React.PropTypes.number.isRequired,
	offset: React.PropTypes.number.isRequired,
}

export default Column;
