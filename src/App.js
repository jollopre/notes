import React, { Component } from 'react';
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect
} from 'react-router-dom';

import Notes from './containers/notes';

class App extends Component {
  render() {
    return (
    	<Router>
    		<div className="container">
    			<Switch>
    				<Route path="/notes" component={Notes} />
    				<Redirect from="/" to="/notes" />
    			</Switch>
      	</div>
    	</Router>
    );
  }
}

export default App;
