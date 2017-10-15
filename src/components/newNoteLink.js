import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class NewNoteLink extends Component {
	render() {
		return (
			<div className="content-wrap ligth-grey">
				<Link to="/notes/new" className="btn btn-default ligth-green">
					New Note
				</Link>
			</div>
		);
	}
}