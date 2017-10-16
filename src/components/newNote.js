import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createNote } from '../actions/notes';
import FormNote from './formNote';

class NewNote extends Component {
	constructor() {
		super();
		this.onSubmit = this.onSubmit.bind(this);
	}
 	onSubmit({ title, description }) {
 		const { createNote, history, nextId } = this.props;
 		createNote({ id: nextId, title, description });
 		history.push(`/notes/${nextId}`);
	}
	render() {
		return (
			<div className="row">
				<div className="col-xs-12">
					<h5>Add Note</h5>
				</div>
				<div className="col-xs-12">
					<FormNote
						note={{ title: '', description: '' }}
						onSubmit={this.onSubmit}
					/>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	const { notes } = state;
	return {
		nextId: (Object.keys(notes.byId).reduce((max, id) => {
			const idConverted = Number(id);
			return idConverted > max ? idConverted : max;
		}, 0) + 1)
	};
};

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		createNote: ({ id, title, description }) => {
			return dispatch(createNote({ id, title, description }));
		}
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(NewNote);