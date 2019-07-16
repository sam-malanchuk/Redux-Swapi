import React, { Component } from "react";
import { getSwapi } from './actions/index'
import { connect } from 'react-redux'
import { CharacterListView } from "./views";
import "./styles/App.css";

class App extends Component {
  componentDidMount() {
    this.props.getSwapi()
  }
  render() {
    return <CharacterListView />;
  }
}

const mapDispatchToProps = {
  getSwapi,
}

export default connect(null, mapDispatchToProps)(App);
