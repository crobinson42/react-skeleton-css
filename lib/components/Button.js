import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
	pull: PropTypes.oneOf(['left', 'right', '']),
	style: PropTypes.object.isRequired,
	className: PropTypes.string.isRequired,
	primary: PropTypes.bool.isRequired,
}

export default Button;
