/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';

function NoteItemBody({ content }) {
  return (
    <div className='noteitem-body'>
      <p>{content}</p>
    </div>
  )
}

export default NoteItemBody;