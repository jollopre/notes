import {
	CREATE_NOTE,
	UPDATE_NOTE,
	DESTROY_NOTE } from '../actions/notes';

const nextId = (noteIds) => {
	return noteIds.reduce((max, id) => {
		const idConverted = Number(id);
		return idConverted > max ? idConverted : max;
	}, 0) + 1;
};

export const notes = (state = { byId: {} }, action) => {
	switch(action.type) {
		case CREATE_NOTE:
			const id = nextId(Object.keys(state.byId));
			return Object.assign(
				{},
				state,
				{ byId: Object.assign(
					{},
					state.byId,
					{ [id]: Object.assign({ id }, action.note) }) });
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