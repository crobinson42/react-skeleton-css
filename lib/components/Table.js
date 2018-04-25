import React, { Component } from 'react';
import PropTypes from 'prop-types';

const Table = (props) => (
	<table
		className='u-full-width'
		{...props}
		>
		{props.children}
	</table>
)

Table.defaultProps = {
	style: {}
}

Table.propTypes = {
	style: PropTypes.object.isRequired
}

export default Table;
