import React, { Component } from 'react';
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect
} from 'react-router-dom';

import Note from './containers/note';

class App extends Component {
  render() {
    return (
    	<Router>
    		<div className="container">
    			<Switch>
    				<Route path="/notes" component={Note} />
    				<Redirect from="/" to="/notes" />
    			</Switch>
      	</div>
    	</Router>
    );
  }
}

export default App;
