import React, { Component } from 'react';
import {
	Route,
	Switch
} from 'react-router-dom';

import NewNote from '../components/newNote';
import ShowNote from '../components/showNote';
import EditNote from '../components/editNote';

export default class Note extends Component {
	render() {
		return (
			<Switch>
				<Route exact path="/notes/new" component={NewNote} />
				<Route exact path="/notes/:id([0-9]+)/edit" component={EditNote} />
				<Route exact path="/notes/:id([0-9]+)" component={ShowNote} />
				<Route render={() => (<h5>TODO nice view</h5>)} />
			</Switch>
		);
	}
}