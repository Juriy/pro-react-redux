import React, {Component} from 'react';

import './search-panel.css';

export default class SearchPanel extends Component {
  state = {
    searchPhrase: '',
  };

  onSearchInput = (evt) => {
    const searchPhrase = evt.target.value;
    this.setState({searchPhrase});
    this.props.onSearchInput(searchPhrase);
  };

  render() {
    return (
      <input
        className="form-control search-input"
        placeholder="type to search"
        type="text"
        value={this.state.searchPhrase}
        onChange={this.onSearchInput}
      />
    );
  }
}
