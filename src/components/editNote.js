import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateNote } from '../actions/notes';
import FormNote from './formNote';
import NotFound from './notFound';

class EditNote extends Component {
	constructor() {
		super();
		this.onSubmit = this.onSubmit.bind(this);
	}
 	onSubmit({ title, description }) {
 		const { note, updateNote, history } = this.props;
 		updateNote({ id: note.id, title, description });
 		history.push(`/notes/${note.id}`);
	}
	render() {
		const { note } = this.props;
		return note ?
			(<div className="row">
				<div className="col-xs-12">
					<h5>Edit Note</h5>
				</div>
				<div className="col-xs-12">
					<FormNote
						note={note}
						onSubmit={this.onSubmit}
					/>
				</div>
			</div>) : (<NotFound />);
	}
}
const mapStateToProps = (state, ownProps) => {
	const id = ownProps.match.params.id;
	return { note: state.notes.byId[id] }
};

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		updateNote: ({ id, title, description }) => {
			return dispatch(updateNote({ id, title, description }));
		}
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(EditNote);

