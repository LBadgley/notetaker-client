import { newNote, fetchNotes } from './notesActions';

jest.mock('../services/notesApi.js', () => ({
  createNote() {
    return Promise.resolve([]);
  },
  getNotes() {
    return Promise.resolve([]);
  }
}));

describe('notes action test', () => {
  it('creates an note creating action', () => {
    const noteAction = newNote({
      title: 'dis my note',
      body: 'dis the body'
    });

    expect(noteAction).toEqual({
      type: 'NEW_NOTE',
      pendingType: 'NEW_NOTE_PENDING',
      fulfilledType: 'NEW_NOTE_FULFILLED',
      rejectedType: 'NEW_NOTE_REJECTED',
      payload: expect.any(Promise)
    });
  });
  // it('creates an action to fetch all notes', () => {
  //   const noteAction =  fetchNotes();

  //   expect(noteAction).toEqual({
  //     type: 'FETCH_NOTES',
  //     pendingType: 'FETCH_NOTES_PENDING',
  //     fulfilledType: 'FETCH_NOTES_FULFILLED',
  //     rejectedType: 'FETCH_NOTES_REJECTED',
  //     payload: expect.any(Promise)
  //   });
  // });
});
