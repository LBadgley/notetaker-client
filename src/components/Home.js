import React from 'react';
import CreateNote from '../container/notes/CreateNoteContainer';
import AllNotes from '../container/notes/AllNotes';

export default function Home() {
  return (
    <>
      <CreateNote />
      <AllNotes />
    </>
  );
}
