export const createNote = note => {
  return fetch('http://localhost:7899/api/v1/notes', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(note)
  })
    .then(res => ([res.ok, res.json()]))
    .then(([ok, json]) => {
      if(!ok) throw 'unable to create a note';

      return json; 
    });
};
