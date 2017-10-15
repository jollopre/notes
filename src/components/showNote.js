import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getDate, getTime } from '../utils/date';
import NotFound from './notFound';
 
class ShowNote extends Component {
	render() {
		const { note } = this.props;
		return note ? 
			(<div className="row">
				<div className="col-xs-12">
					<p className="text-center">
						{`Last edited: ${getDate(note.updated_at)} at ${getTime(note.updated_at)}`}
					</p>
				</div>
				<div className="col-xs-12">
					<div className="pull-left">
						<h5>{note.title}</h5>
					</div>
					<div className="pull-right">
						<Link to={`/notes/${note.id}/edit`} className="btn btn-default">
							Edit Note
						</Link>
					</div>
					<div className="clearfix" />
				</div>
				<div className="col-xs-12">
					<p className="text-justify">{note.description}</p>
				</div>
			</div>) : (<NotFound />);
	}
}

const mapStateToProps = (state, ownProps) => {
	const id = ownProps.match.params.id;
	return { note: state.notes.byId[id] };
}

export default connect(mapStateToProps)(ShowNote);



