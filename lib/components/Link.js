import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Link extends Component {
	render() {
		const { primary, href, className, pull, ...props } = this.props
		let _className = primary ? 'button button-primary' : className
		_className += pull ? ` u-pull-${pull}` : ''

		return (
			<a
				href={href}
				className={_className}
				{...props}
				>
				{this.props.children}
			</a>
		);
	}
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
