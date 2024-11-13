/* eslint-disable react/prop-types */
import React from 'react';

class NoteSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
    }
    this.onSearchChangeEventHandler = this.onSearchChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }
  onSearchChangeEventHandler(event) {  
    this.setState(() => {
      return {
        title: event.target.value
      }
    });
  }
  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.onSearch(this.state.title);
  }
  render() {
    return (
      <form className='notesearch' onSubmit={this.onSubmitEventHandler}>
        <input type='text' placeholder='Cari Catatan' value={this.state.title} onChange={this.onSearchChangeEventHandler}/>
      </form>
    )
  }
}

export default NoteSearch;