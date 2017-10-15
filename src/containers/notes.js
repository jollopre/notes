import React, { Component } from 'react';
import { connect } from 'react-redux';
import IndexNote from '../components/indexNote';

class Notes extends Component {
	render() {
		const { list } = this.props;
		return (
			<IndexNote list={list} />
		);
	}
}

const mapStateToProps = (state) => {
	const { byId: notesById } = state.notes;
	return { list: Object.keys(notesById).reduce((acc, key) => {
		return acc.concat(notesById[key]);
	}, []) };
}

export default connect(mapStateToProps)(Notes);