import reducer from './notesReducer';
import { NEW_NOTE, NEW_NOTE_PENDING, FETCH_NOTES_PENDING, FETCH_NOTES } from '../actions/notesActions';

describe('notes reducer', () => {
  it('handles the NEW_NOTE_PENDING action', () => {
    const initialState = {
      loading: false,
      list: []
    };
    const newState = reducer(initialState, {
      type: NEW_NOTE_PENDING
    });

    expect(newState).toEqual({
      loading: true,
      list: []
    });
  });

  it('handles the NEW_NOTE action', () => {
    const initialState = {
      loading: true,
      list: []
    };
    const newState = reducer(initialState, {
      type: NEW_NOTE,
      payload: {
        title: 'new note',
        body: 'this is the body'
      }
    });

    expect(newState).toEqual({
      loading: false,
      list: [{ title: 'new note', body: 'this is the body' }]
    });
  });
  it('handles the FETCH_NOTES_PENDING action', () => {
    const initialState = {
      loading: false,
      list: []
    };
    const newState = reducer(initialState, {
      type: FETCH_NOTES_PENDING
    });
    expect(newState).toEqual({
      loading: true,
      list: []
    });
  });
  it('handles the FETCH_NOTES action', () => {
    const initialState = {
      loading: true,
      list: []
    };
    const newState = reducer(initialState, {
      type: FETCH_NOTES,
      payload: [{ title: 'title 1', body: 'body1' }]
    });
    expect(newState).toEqual({
      loading: false,
      list: [{ title: 'title1', body: 'body1' }]
    });
  });
});
