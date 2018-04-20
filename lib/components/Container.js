import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
	style: PropTypes.object.isRequired,
	className: PropTypes.string.isRequired
}

export default Container;
