import React, { Component } from 'react';
import { connect } from 'react-redux';
import IndexNote from '../components/indexNote';

class Note extends Component {
	render() {
		const { list } = this.props;
		return (<IndexNote list={list} />);
	}
}

const mapStateToProps = (state) => {
	const { notes } = state;
	return { list: notes };
}

export default connect(mapStateToProps)(Note);