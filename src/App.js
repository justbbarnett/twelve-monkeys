import React, { Component } from 'react';
import Main from './components/Main';
import Header from './components/Header';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      score: 0,
      highScore: 0
    }
  }

  handleScore = () => {
    const newScore = this.state.score + 1;
    this.setState({
      score: newScore
    });
    if (newScore >= this.state.highScore) {
      this.setState({ highScore: newScore });
    }
    else if (newScore === 12) {
      alert("you win");
    }
  }

  render() {
    return (
      <div className="App">
        <Header
        score={this.state.score}
        highScore={this.state.highScore}
        />
        <Main
        handleScore={this.handleScore}
        />
      </div>
    );
  }
}

export default App;
