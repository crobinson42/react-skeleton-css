import React, { Component } from 'react';

class Container extends Component {
	render() {
		return (
			<div
				className={this.props.className}
				style={this.props.style}
				>
				{this.props.children}
			</div>
		);
	}
}

Container.defaultProps = {
	style: {},
	className: 'container'
}

Container.propTypes = {
	style: React.PropTypes.object.isRequired,
	className: React.PropTypes.string.isRequired
}

export default Container;
