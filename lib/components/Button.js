import React, { Component } from 'react';

class Button extends Component {
	render() {
		const { primary, pull, className, ...props } = this.props
		let _className = this.props.primary ? 'button-primary' : className
		_className += this.props.pull ? ` u-pull-${this.props.pull}` : ''

		return (
			<button
				className={_className}
				{...props}
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
