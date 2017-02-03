import React, { Component } from 'react';

class Table extends Component {
	render() {
		return (
			<table
				className='u-full-width'
				{...this.props}
				>
				{this.props.children}
			</table>
		);
	}
}

Table.defaultProps = {
	style: {}
}

Table.propTypes = {
	style: React.PropTypes.object.isRequired
}

export default Table;
