import React, { Component } from 'react';
import PropTypes from 'prop-types';

const Container = ({className, style, ...props}) => (
	<div
		className={className}
		style={style}
		>
		{props.children}
	</div>
);

Container.defaultProps = {
	style: {},
	className: 'container'
}

Container.propTypes = {
	style: PropTypes.object.isRequired,
	className: PropTypes.string.isRequired
}

export default Container;
