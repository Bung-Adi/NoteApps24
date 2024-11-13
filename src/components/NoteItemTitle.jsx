/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';

function NoteItemTitle({ title, date }) {
  return (
    <div className='noteitem-title'>
      <h3>{title}</h3>
      <p>{date}</p>
    </div>
  )
}

export default NoteItemTitle;