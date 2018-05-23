import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();
    this.state = {
      photos: [],
      title: '',
      content: ''
    }
  }

  componentDidMount() {
    this.fetchPhotos();
  }
  
  fetchPhotos() {
    axios.get('/api/photo')
      .then(({ data }) => {
        console.log('Got data back:', data);
        this.setState({ photos: data }, () => {
          console.log('Photo state:', this.state.photos)
        })
      })
      .catch((err) => {
        console.log('Error in CDM of App:', err);
      })
  }

  handleInputChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onPhotoPost() {
    axios.post('/api/photo', {
      title: this.state.title,
      content: this.state.content
    })
      .then(({ data }) => {
        console.log('Data from POST /api/photo', data);
        this.setState({
          photos: [...this.state.photos, data]
        })
      })
      .catch(err => {
        console.log('Error on POST', err);
      })
  }

  render() {
    return (
      <div>
        Hello from React!
        <input type="text" name="title" onKeyUp={(e) => this.handleInputChange(e)} />
        <input type="text" name="content" onKeyUp={(e) => this.handleInputChange(e)} />
        <button onClick={this.onPhotoPost.bind(this)}>POST!</button>
      </div>
    )
  }
}

export default App;