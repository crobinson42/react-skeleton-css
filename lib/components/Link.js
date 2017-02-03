import React, { Component } from 'react';

class Link extends Component {
	render() {
		return (
			<a
				href={this.props.href}
				className={this.props.primary ? 'button button-primary' : this.props.className}
				style={this.props.style}
				>
				{this.props.children}
			</a>
		);
	}
}

Link.defaultProps = {
	style: {},
	className: 'button',
	primary: false,
	href: 'javascriipt(void);'
}

Link.propTypes = {
	style: React.PropTypes.object.isRequired,
	className: React.PropTypes.string.isRequired,
	primary: React.PropTypes.bool.isRequired,
	href: React.PropTypes.string.isRequired,
}

export default Link;
