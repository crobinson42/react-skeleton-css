import React, { Component } from 'react';
import PropTypes from 'prop-types';

const Row = ({ className, ...props }) => (
	<div
		className={className}
		{...props}
		>
		{props.children}
	</div>
)

Row.defaultProps = {
	style: {},
	className: 'row'
}

Row.propTypes = {
	style: PropTypes.object.isRequired,
	className: PropTypes.string.isRequired
}

export default Row;
