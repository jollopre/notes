import { CREATE_NOTE } from '../actions/notes';

const nextId = (notes) => {
	return notes.reduce((max, note) => {
		return note.id > max ? note.id : max;
	}, -1) + 1;
};

export const notes = (state = [], action) => {
	switch(action.type) {
		case CREATE_NOTE:
			return state.concat(Object.assign({ id: nextId(state) }, action.note));
		default:
			return state;
	}
}