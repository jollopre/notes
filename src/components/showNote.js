import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getDate, getTime } from '../utils/date';
import NotFound from './notFound';
import DeleteNote from './deleteNote';
 
class ShowNote extends Component {
	render() {
		const { note } = this.props;
		return note ? 
			(<div className="row">
				<div className="col-xs-12">
					<p className="text-center margin-top">
						<small>
							{`Last edited: ${getDate(note.updated_at)} at ${getTime(note.updated_at)}`}
						</small>
					</p>
				</div>
				<div className="col-xs-12">
					<div className="pull-left">
						<p className="slightly-dark-grey">{note.title}</p>
					</div>
					<div className="pull-right">
						<ul className="list-inline">
							<li>
								<Link to={`/notes/${note.id}/edit`} className="btn btn-default">
									Edit Note
								</Link>
							</li>
							<li>
								<DeleteNote id={note.id} />
							</li>
						</ul>
					</div>
					<div className="clearfix" />
				</div>
				<div className="col-xs-12">
					<p className="text-justify slightly-dark-grey">{note.description}</p>
				</div>
			</div>) : (<NotFound />);
	}
}

const mapStateToProps = (state, ownProps) => {
	const id = ownProps.match.params.id;
	return { note: state.notes.byId[id] };
}

export default connect(mapStateToProps)(ShowNote);



