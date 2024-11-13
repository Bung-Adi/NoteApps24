/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import NoteItemTitle from './NoteItemTitle';
import NoteItemBody from './NoteItemBody';
import NoteItemCta from './NoteItemCta';

function NoteItem({ id, title, body, archived, date, onDelete, onChange }) {
  return (
    <div className='noteitem'>
      <NoteItemTitle title={title} date={date}/>
      <NoteItemBody content={body} />
      <NoteItemCta id={id} archived={archived} onDelete={onDelete} onChange={onChange} />
    </div>
  )
}

export default NoteItem;