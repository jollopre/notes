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
 		const { createNote, history } = this.props;
 		createNote({ title, description });
 		history.push('/notes');
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

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		createNote: ({ title, description }) => {
			return dispatch(createNote({ title, description }));
		}
	}
};

export default connect(null, mapDispatchToProps)(NewNote);