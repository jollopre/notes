import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getDate } from '../utils/date';

export default class ListItemNote extends Component {
	render() {
		const { item : note } = this.props;
		// TODO add active class for a element
		return (
			<Link to={`/notes/${note.id}`} className="list-group-item">
				<h4>{note.title}</h4>
				<p>{getDate(note.updated_at)}</p>
			</Link>
		);
	}
}

ListItemNote.propTypes = {
	item: PropTypes.object.isRequired,
}
