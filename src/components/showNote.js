import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getDate, getTime } from '../utils/date';
 
class ShowNote extends Component {
	render() {
		const { note } = this.props;
		return (
			<div className="row">
				<div className="col-xs-12">
					<p className="text-center">
						{`Last edited: ${getDate(note.updated_at)} at ${getTime(note.updated_at)}`}
					</p>
				</div>
				<div className="col-xs-12">
					<h5>{note.title}</h5>
				</div>
				<div className="col-xs-12">
					<p className="text-justify">{note.description}</p>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	const id = Number(ownProps.match.params.id);
	const note = state.notes.find(note => note.id === id);
	return { note };
}

export default withRouter(connect(mapStateToProps)(ShowNote));



