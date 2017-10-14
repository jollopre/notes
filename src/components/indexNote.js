import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
	Route,
	Switch
} from 'react-router-dom';
import Toggle from './toggle';
import ListNote from './listNote';
import NewNote from './newNote';
import ShowNote from './showNote';

export default class IndexNote extends Component {
	render() {
		const { list } = this.props;
		return (
			<div className="row">
				<div className="col-xs-4">
					<div className="row">
						<div className="col-xs-12">
							<Toggle />
						</div>
						<div className="col-xs-12">
							<ListNote list={list} />
						</div>
					</div>
				</div>
				<div className="col-xs-8">
					<div className="row">
						<div className="col-xs-12">{
							<Switch>
								<Route path="/notes/new" component={NewNote} />
								<Route path="/notes/:id([0-9]+)" component={ShowNote} />
							</Switch>
							}
						</div>
					</div>
				</div>
			</div>
		);
	}
}

IndexNote.propTypes = {
	list: PropTypes.array.isRequired,
}