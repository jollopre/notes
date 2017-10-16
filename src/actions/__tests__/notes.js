import {
    CREATE_NOTE,
    UPDATE_NOTE,
    DESTROY_NOTE,
    createNote,
    updateNote,
    destroyNote
} from '../notes';

describe('createNote action creator', () => {
    it('should return action CREATE_NOTE given title and description', () => {
        const action = createNote({ id: 1, title: 'foo', 'description': 'bar' });

        expect(action).toHaveProperty('type', CREATE_NOTE);
        expect(action).toHaveProperty('note');
        expect(action).toHaveProperty('note.id', 1);
        expect(action).toHaveProperty('note.title', 'foo');
        expect(action).toHaveProperty('note.description', 'bar');
        expect(action).toHaveProperty('note.updated_at');
    });
});

describe('updateNote action creator', () => {
    it('should return action UPDATE_NOTE given id, title and description', () => {
        const action = updateNote({ id: 1, title: 'foo', 'description': 'bar' });

        expect(action).toHaveProperty('type', UPDATE_NOTE);
        expect(action).toHaveProperty('note');
        expect(action).toHaveProperty('note.id', 1);
        expect(action).toHaveProperty('note.title', 'foo');
        expect(action).toHaveProperty('note.description', 'bar');
        expect(action).toHaveProperty('note.updated_at');
    });
});

describe('destroyNote action creator', () => {
    it('should return action DESTROY_NOTE given id', () => {
        expect(destroyNote({ id: 1})).toEqual({
            type: DESTROY_NOTE,
            id: 1
        });
    });
});