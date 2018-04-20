import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Table extends Component {
	render() {
		return (
			<table
				className='u-full-width'
				{...this.props}
				>
				{this.props.children}
			</table>
		);
	}
}

Table.defaultProps = {
	style: {}
}

Table.propTypes = {
	style: PropTypes.object.isRequired
}

export default Table;
