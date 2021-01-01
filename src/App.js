import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Image from './components/Web developer-1.jpg'
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container-fluid">
          <div className="row">
            <div className="image">
              <img src={Image} width="1100px" height="1600px" alt="" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
