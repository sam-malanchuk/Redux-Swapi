import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
// import actions
import { getSwapi } from '../actions/index'

class CharacterListView extends React.Component {
  componentDidMount() {
    // call our action
    this.props.getSwapi()
  }

  render() {
    if (this.props.fetching) {
      // return something here to indicate that you are fetching data
      return <h2>fetching data...</h2>
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
const mapStateToProps = (state) => {
  const { characters, fetching, errorMessage } = state.charsReducer
  return {
    characters,
    fetching,
    errorMessage,
  }
}

export default connect(
  mapStateToProps /* mapStateToProps replaces null here */,
  {
    /* action creators go here */
    getSwapi,
  }
)(CharacterListView);
