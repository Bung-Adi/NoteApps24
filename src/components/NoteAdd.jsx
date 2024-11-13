/* eslint-disable react/prop-types */
import React from 'react';

class NoteAdd extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: '',
      maxChars: 50,
      charsLeft: 50
    }
    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }
  onTitleChangeEventHandler(event) {
    const newTitle = event.target.value;
    const charsLeft = this.state.maxChars - newTitle.length;
    this.setState(() => {
      return {
        title: event.target.value.slice(0, 50),
        charsLeft: charsLeft
      }
    });
  }
  onBodyChangeEventHandler(event) {  
    this.setState(() => {
      return {
        body: event.target.value
      }
    });
  }
  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.addNote(this.state);
  }
  render() {
    return (
      <>
        <h2 className='addtitle'>Buat Catatan</h2>
        <p className='charleft'>Sisa Karakter : {this.state.charsLeft}</p>
        <form className='noteadd' onSubmit={this.onSubmitEventHandler}>
          <input type='text' placeholder='Judul' value={this.state.title} onChange={this.onTitleChangeEventHandler}/>
          <textarea placeholder='Lorem ipsum ...' value={this.state.body} onChange={this.onBodyChangeEventHandler}/>
          <button type='submit'>Buat</button>
        </form>
      </>
    )
  }
}

export default NoteAdd;