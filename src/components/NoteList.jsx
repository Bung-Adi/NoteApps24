/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import NoteItem from './NoteItem';

function NoteList({ notes, dateFormat, onDelete, onChange, section }) {
  return (
    <div className='notelist'>
      <hr />
      <h2>{section}</h2>
      {
        notes.map((note) => (
          <NoteItem key={note.id} date={dateFormat(note.createdAt)} onDelete={onDelete} onChange={onChange} {...note}/>
        ))
      }
    </div>
  );
}

export default NoteList;