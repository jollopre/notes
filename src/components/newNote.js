import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createNote } from '../actions/notes';

class NewNote extends Component {
	constructor() {
		super();
		this.state = { title: null, description: null };
		this.onChangeTitle = this.onChangeTitle.bind(this);
		this.onChangeDescription = this.onChangeDescription.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}
	onChangeTitle(e) {
		this.setState({ title: e.target.value });
	}
	onChangeDescription(e) {
		this.setState({ description: e.target.value });
	}
 	onSubmit(e) {
 		e.preventDefault();
 		const { createNote, history } = this.props;
 		const { title, description } = this.state;
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
					<form onSubmit={this.onSubmit}>
						<div className="form-group">
							<label htmlFor="title" className="sr-only">Title</label>
							<input
								type="text"
								className="form-control"
								id="title"
								placeholder="Title"
								onChange={this.onChangeTitle}
							/>
						</div>
						<div className="form-group">
							<label htmlFor="description" className="sr-only">Description</label>
							<textarea
								className="form-control"
								id="description"
								rows="10"
								placeholder="Description"
								onChange={this.onChangeDescription}
							/>
						</div>
						<button type="submit" className="btn btn-default">Create</button>
					</form>
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