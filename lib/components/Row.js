import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Row extends Component {
	render() {
		return (
			<div
				className={this.props.className}
				{...this.props}
				>
				{this.props.children}
			</div>
		);
	}
}

Row.defaultProps = {
	style: {},
	className: 'row'
}

Row.propTypes = {
	style: PropTypes.object.isRequired,
	className: PropTypes.string.isRequired
}

export default Row;
