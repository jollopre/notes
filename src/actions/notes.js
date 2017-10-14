export const CREATE_NOTE = 'CREATE_NOTE';
export const UPDATE_NOTE = 'UPDATE_NOTE';

export const createNote = ({ title = '', description = '' } = {}) => ({
	type: CREATE_NOTE,
	note: {
		title,
		description,
		updated_at: Date.now()
	},
});