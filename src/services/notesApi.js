export const createNote = note => {
  return Promise.resolve({
    _id: '11111',
    ...note
  });
};
