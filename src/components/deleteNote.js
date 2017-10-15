import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { destroyNote } from '../actions/notes';

class DeleteNote extends Component {
	constructor() {
		super();
		this.onSubmit = this.onSubmit.bind(this);
	}
	onSubmit(e) {
		e.preventDefault();
		const { destroyNote, id, history } = this.props;
		destroyNote(id);
		history.push('/notes');
	}
	render() {
		return (
			<form onSubmit={this.onSubmit}>
				<input className="btn btn-default" type="submit" value="Delete Note" />
			</form>
		);
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		destroyNote: (id) => {
			return dispatch(destroyNote({ id }));
		}
	};
};

DeleteNote.propTypes = {
	id: PropTypes.number.isRequired,
};

export default withRouter(connect(null, mapDispatchToProps)(DeleteNote));
