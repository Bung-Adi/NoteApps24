/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import NoteSearch from './NoteSearch';

function NoteHeader({ name, onSearch }){
  return (
    <div className="noteheader">
      <h1>{name}</h1>
      <NoteSearch onSearch={onSearch} />
    </div>
  )
}

export default NoteHeader;