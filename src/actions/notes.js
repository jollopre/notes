export const CREATE_NOTE = 'CREATE_NOTE';
export const UPDATE_NOTE = 'UPDATE_NOTE';
export const DESTROY_NOTE = 'DESTROY_NOTE';

export const createNote = ({ id = null, title = null, description = null } = {}) => ({
	type: CREATE_NOTE,
	note: {
		id,
		title,
		description,
		updated_at: Date.now()
	},
});

export const updateNote = ({ id = null, title = null, description = null } = {}) => ({
	type: UPDATE_NOTE,
	note: {
		id,
		title,
		description,
		updated_at: Date.now()
	},
});

export const destroyNote = ({ id = null } = {}) => ({
	type: DESTROY_NOTE,
	id,
});