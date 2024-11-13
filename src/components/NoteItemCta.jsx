/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';

function NoteItemCta({ id, archived, onChange, onDelete }) {
  return (
    <div className='noteitem-cta'>
      <button className='item-delete-button' onClick={() => onDelete(id)} >Delete</button>
      <button className='item-action-button' onClick={() => onChange(id)} >{archived ? 'Pindahkan' : 'Arsipkan'}</button>
    </div>
  )
}

export default NoteItemCta;