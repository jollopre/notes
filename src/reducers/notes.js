import {
	CREATE_NOTE,
	UPDATE_NOTE,
	DESTROY_NOTE } from '../actions/notes';

export const notes = (state = { byId: {} }, action) => {
	switch(action.type) {
		case CREATE_NOTE:
		case UPDATE_NOTE:
			const { note } = action;
			return Object.assign(
				{},
				state,
				{ byId: Object.assign(
					{},
					state.byId,
					{ [note.id]: note }) });
		case DESTROY_NOTE:
			const byId = Object.assign({}, state.byId);
			delete byId[action.id];
			return Object.assign(
				{},
				state,
				{ byId });
		default:
			return state;
	}
}