import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
 
class ShowNote extends Component {
	render() {
		const { note } = this.props;
		return (<p>{JSON.stringify(note)}</p>);
	}
}

const mapStateToProps = (state, ownProps) => {
	const id = Number(ownProps.match.params.id);
	const note = state.notes.find(note => note.id === id);
	return { note };
}

export default withRouter(connect(mapStateToProps)(ShowNote));



