import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import ListItemNote from './listItemNote';

class ListNote extends Component {
	constructor() {
		super();
		this.state = { active: -1 };
	}
	componentDidMount() {
		const { location } = this.props;
		const regex = /\/notes\/([0-9]+)(?:\/edit|$)/;
		const active = location.pathname.match(regex);
		if (active) {
			this.setState({ active: Number(active[1]) });
		}
	}
	render() {
		const { list } = this.props;
		const { active } = this.state;
		return (
			<div className="list-group reset-margin-bottom">
				{list.map(item => (<ListItemNote key={item.id} item={item} active={active} />))}
			</div>
		);
	}
}

ListNote.propTypes = {
	list: PropTypes.array.isRequired,
};

export default withRouter(ListNote);