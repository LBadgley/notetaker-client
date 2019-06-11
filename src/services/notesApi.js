import { post } from './request';

export const createNote = note => post('/api/v1/note', note);
