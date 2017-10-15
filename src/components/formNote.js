import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { isEmpty } from '../utils/validator';

export default class FormNote extends Component {
	constructor() {
		super();
		this.state = { title: '',
			description: '',
			invalidTitle: true,
			invalidDescription: true
		};
		this.onChangeTitle = this.onChangeTitle.bind(this);
		this.onChangeDescription = this.onChangeDescription.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}
	componentDidMount() {
		const { title, description } = this.props.note;
		this.setState({
			title,
			description,
			invalidTitle: isEmpty(title),
			invalidDescription: isEmpty(description)
		});
	}
	onChangeTitle(e) {
		this.setState({ title: e.target.value, invalidTitle: isEmpty(e.target.value) });
	}
	onChangeDescription(e) {
		this.setState({ description: e.target.value, invalidDescription: isEmpty(e.target.value) });
	}
	onSubmit(e) {
		e.preventDefault();
		const { title, description, invalidTitle, invalidDescription } = this.state;
		const { onSubmit: createOrUpdate } = this.props;
		if(!(invalidTitle || invalidDescription)) {
			createOrUpdate({ title, description });
		}
	}
	render() {
		const { title, description, invalidTitle, invalidDescription } = this.state;
		return (
			<form onSubmit={this.onSubmit}>
				<div className={`form-group ${invalidTitle ? 'has-warning' : 'has-success'}`}>
					<label htmlFor="title" className="sr-only">Title</label>
					<input
						type="text"
						className="form-control"
						id="title"
						placeholder="Title"
						onChange={this.onChangeTitle}
						value={title}
						aria-describedby="helpBlock1"
						aria-invalid="true"
					/>
					<span id="helpBlock1" className={`help-block ${invalidTitle ? 'show' : 'hidden'}`}>
						Title cannot be empty
					</span>
				</div>
				<div className={`form-group ${invalidDescription ? 'has-warning' : 'has-success'}`}>
					<label htmlFor="description" className="sr-only">Description</label>
					<textarea
						className="form-control"
						id="description"
						rows="10"
						placeholder="Description"
						onChange={this.onChangeDescription}
						value={description}
						aria-describedby="helpBlock2"
						aria-invalid="true"
					/>
					<span id="helpBlock2" className={`help-block ${invalidDescription ? 'show' : 'hidden'}`}>
						Description cannot be empty
					</span>
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