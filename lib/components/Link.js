import React, { Component } from 'react';
import PropTypes from 'prop-types';

const Link = ({ primary, href, className, pull, ...props }) => {
	let _className = primary ? 'button button-primary' : className
	_className += pull ? ` u-pull-${pull}` : ''

	return (
		<a
			href={href}
			className={_className}
			{...props}
			>
			{props.children}
		</a>
	);
}

Link.defaultProps = {
	pull: '',
	style: {},
	className: 'button',
	primary: false,
	href: '#'
}

Link.propTypes = {
	pull: PropTypes.oneOf(['left', 'right', '']),
	style: PropTypes.object.isRequired,
	className: PropTypes.string.isRequired,
	primary: PropTypes.bool.isRequired,
	href: PropTypes.string.isRequired,
}

export default Link;
