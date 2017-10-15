import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NewNoteLink from './newNoteLink';
import ListNote from './listNote';
import Note from './note';

export default class IndexNote extends Component {
	render() {
		const { list } = this.props;
		return (
			<div className="row">
				<div className="col-xs-4">
					<div className="row">
						<div className="col-xs-12">
							<NewNoteLink />
						</div>
						<div className="col-xs-12">
							<ListNote list={list} />
						</div>
					</div>
				</div>
				<div className="col-xs-8">
					<div className="row">
						<div className="col-xs-12">
							<Note />
						</div>
					</div>
				</div>
			</div>
		);
	}
}

IndexNote.propTypes = {
	list: PropTypes.array.isRequired,
};


