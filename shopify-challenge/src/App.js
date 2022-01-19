import React from 'react';
import './App.css';
import { Navbar, Card } from './components'

class App extends React.Component {
  state  = {
    images: []
  }
  componentDidMount() {
    fetch("https://api.nasa.gov/planetary/apod?api_key=4aqQJP8Rg30dI09L3BSsvo2Cz6KNlGLuYvqD5145&count=2")
    .then(res => res.json())
    .then(data => {
        this.setState({images: data})
        console.log(data)
    })
  }

  render() {
    return(
      <div>
        <Navbar />
        {this.state.images.map((image, index) => <Card data={image} key={index}/>)}
      </div>
    )
  }
}

export default App
