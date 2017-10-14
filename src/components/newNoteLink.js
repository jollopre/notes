import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class NewNoteLink extends Component {
	render() {
		return (
			<Link to="/notes/new" className="btn btn-default">
				New Note
			</Link>
		);
	}
}