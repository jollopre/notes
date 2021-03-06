import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getDate } from '../utils/date';

export default class ListItemNote extends Component {
	render() {
		const { item : note, active } = this.props;
		return (
			<Link
				to={`/notes/${note.id}`}
				className={`list-group-item ${active === note.id ? 'active' : ''}`}>
				<p className="dark-grey reset-margin">{note.title}</p>
				<p className="reset-margin">{getDate(note.updated_at)}</p>
			</Link>
		);
	}
}

ListItemNote.propTypes = {
	item: PropTypes.object.isRequired,
	active: PropTypes.number.isRequired,
};