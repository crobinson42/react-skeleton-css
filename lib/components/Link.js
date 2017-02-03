import React, { Component } from 'react';

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
	pull: React.PropTypes.oneOf(['left', 'right', '']),
	style: React.PropTypes.object.isRequired,
	className: React.PropTypes.string.isRequired,
	primary: React.PropTypes.bool.isRequired,
	href: React.PropTypes.string.isRequired,
}

export default Link;
