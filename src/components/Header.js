import React, { Component } from 'react';
import Navbar from './Navbar';
import "../styles/Header.css";

export default class Header extends Component {

  render() {
    return (
      <header className="header sticky-top">
        <Navbar
        score={this.props.score}
        highScore={this.props.highScore}
        />
      </header>
    )
  }
}
