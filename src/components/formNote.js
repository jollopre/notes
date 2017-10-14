import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class FormNote extends Component {
	constructor() {
		super();
		this.state = { title: '', description: '' };
		this.onChangeTitle = this.onChangeTitle.bind(this);
		this.onChangeDescription = this.onChangeDescription.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}
	componentDidMount() {
		const { title, description } = this.props.note;
		this.setState({ title, description });
	}
	onChangeTitle(e) {
		this.setState({ title: e.target.value });
	}
	onChangeDescription(e) {
		this.setState({ description: e.target.value });
	}
	onSubmit(e) {
		e.preventDefault();
		const { title, description } = this.state;
		const { onSubmit: createOrUpdate } = this.props;
		createOrUpdate({ title, description });
	}
	render() {
		const { title, description } = this.state;
		return (
			<form onSubmit={this.onSubmit}>
				<div className="form-group">
					<label htmlFor="title" className="sr-only">Title</label>
					<input
						type="text"
						className="form-control"
						id="title"
						placeholder="Title"
						onChange={this.onChangeTitle}
						value={title}
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
						value={description}
					/>
				</div>
				<button type="submit" className="btn btn-default">Submit</button>
			</form>
		);
	}
}

FormNote.propTypes = {
	note: PropTypes.object.isRequired,
	onSubmit: PropTypes.func.isRequired,
};