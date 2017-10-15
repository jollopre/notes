import React, { Component } from 'react';
import {
	Route,
	Switch
} from 'react-router-dom';

import NewNote from './newNote';
import ShowNote from './showNote';
import EditNote from './editNote';

export default class Note extends Component {
	render() {
		return (
			<Switch>
				<Route exact path="/notes/new" component={NewNote} />
				<Route exact path="/notes/:id([0-9]+)/edit" component={EditNote} />
				<Route exact path="/notes/:id([0-9]+)" component={ShowNote} />
			</Switch>
		);
	}
}