import {
	createNote,
	updateNote,
	destroyNote
} from '../../actions/notes';
import { notes } from '../notes';

describe('notes reducer', () => {
	it('should createNote', () => {
		const action = createNote({ title: 'foo', 'description': 'bar' });
		const notesState = notes({ byId: {} }, action);
		expect(notesState).toHaveProperty('byId.1');
		expect(notesState).toHaveProperty('byId.1.id', 1);
		expect(notesState).toHaveProperty('byId.1.title', 'foo');
		expect(notesState).toHaveProperty('byId.1.description', 'bar');
		expect(notesState).toHaveProperty('byId.1.updated_at');
	});
	it('should updateNote', () => {
		const action = updateNote({ id: 1, title: 'fooUpdated', 'description': 'barUpdated' });
		const notesState = notes({ byId: {
			1: {
				id: 1,
				title: 'foo',
				description: 'bar',
				updated_at: Date.now(),
			}}}, action);
		expect(notesState).toHaveProperty('byId.1');
		expect(notesState).toHaveProperty('byId.1.id', 1);
		expect(notesState).toHaveProperty('byId.1.title', 'fooUpdated');
		expect(notesState).toHaveProperty('byId.1.description', 'barUpdated');
		expect(notesState).toHaveProperty('byId.1.updated_at');
	});
	it('should deleteNote', () => {
		const action = destroyNote({ id: 1 });
		const notesState = notes({ byId: {
			1: {
				id: 1,
				title: 'foo',
				description: 'bar',
				updated_at: Date.now(),
			},
			2: {
				id: 2,
				title: 'foo2',
				description: 'bar2',
				updated_at: Date.now(),
			}}}, action);
		expect(notesState).not.toHaveProperty('byId.1');
		expect(notesState).toHaveProperty('byId.2');
	});
});