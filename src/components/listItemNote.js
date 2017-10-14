import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class ListItemNote extends Component {
	render() {
		const { item : note } = this.props;
		// TODO add active class for a element
		return (
			<Link to={`/notes/${note.id}`} className="list-group-item">
				<h4>{note.title}</h4>
				<p>{note.updated_at}</p>
			</Link>
		);
	}
}

ListItemNote.propTypes = {
	item: PropTypes.object.isRequired,
}
