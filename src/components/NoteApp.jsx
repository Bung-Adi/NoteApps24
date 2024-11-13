import React from 'react';
import { getInitialData } from '../utils/index';
import NoteHeader from './NoteHeader';
import NoteAdd from './NoteAdd';
import NoteList from './NoteList';

class NoteApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData()
    };
    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onFlipHandler = this.onFlipHandler.bind(this);
    this.onSearchHandler = this.onSearchHandler.bind(this);
  }

  showFormattedDate = (date) => {
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric"
    };
    return new Date(date).toLocaleDateString("id-ID", options);
  }

  onAddNoteHandler({ title, body }) {
    const newNote = {
      id: +new Date(),
      title,
      body,
      createdAt: new Date().toString(),
      archived: false
    };
    this.setState((prevState) => {
      return {
        notes: [...prevState.notes, newNote]
      };
    });
  }

  onDeleteHandler(id) {
    const updatedNotes = this.state.notes.filter(note => note.id !== id);
    this.setState({ notes: updatedNotes });
  }

  onFlipHandler(id) {
    const updatedNotes = this.state.notes.map(note => {
      if (note.id === id) {
        return { ...note, archived: !note.archived };
      }
      return note;
    });
    this.setState({ notes: updatedNotes });
  }

  onSearchHandler(title) {
    if (title.trim() === '') {
      this.setState({ notes: getInitialData() });
    } else {
      const filteredNotes = this.state.notes.filter(note =>
        note.title.toLowerCase().includes(title.toLowerCase())
      );
      this.setState({ notes: filteredNotes });
    }
  }

  render() {
    return (
      <div className='noteapp'>
        <NoteHeader name="Notes" onSearch={this.onSearchHandler}/>
        <NoteAdd addNote={this.onAddNoteHandler} />
        <NoteList notes={this.state.notes.filter(note => !note.archived)} dateFormat={this.showFormattedDate} onDelete={this.onDeleteHandler} onChange={this.onFlipHandler} section="Catatan Aktif" />
        <NoteList notes={this.state.notes.filter(note => note.archived)} dateFormat={this.showFormattedDate} onDelete={this.onDeleteHandler} onChange={this.onFlipHandler} section="Catatan Arsip" />
      </div>
    );
  }
}

export default NoteApp;
