import notes from '../notes.json';

export const initialState = {
	notes : {
		byId: notes.reduce((acc, note) => {
			acc[note.id] = note;
			return acc;
		}, {})
	}
};