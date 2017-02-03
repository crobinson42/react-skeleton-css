import React, { Component } from 'react';

class Button extends Component {
	render() {
		let _className = this.props.primary ? 'button-primary' : this.props.className
		_className += this.props.pull ? ` u-pull-${this.props.pull}` : ''

		return (
			<button
				className={_className}
				style={this.props.style}
				>
				{this.props.children}
			</button>
		);
	}
}

Button.defaultProps = {
	pull: '',
	style: {},
	className: 'button',
	primary: false
}

Button.propTypes = {
	pull: React.PropTypes.oneOf(['left', 'right', '']),
	style: React.PropTypes.object.isRequired,
	className: React.PropTypes.string.isRequired,
	primary: React.PropTypes.bool.isRequired,
}

export default Button;
