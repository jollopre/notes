import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ListItemNote from './listItemNote';

export default class ListNote extends Component {
	render() {
		const { list } = this.props;
		return (
			<div className="list-group reset-margin-bottom">
				{list.map(item => (<ListItemNote key={item.id} item={item} />))}
			</div>
		);
	}
}

ListNote.propTypes = {
	list: PropTypes.array.isRequired,
};