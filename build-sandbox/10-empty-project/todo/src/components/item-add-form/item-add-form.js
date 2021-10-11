import React, {Component} from 'react';

import './item-add-form.css';

export default class ItemAddForm extends Component {
  state = {
    itemText: '',
  };
  
  onItemFildInput = (evt) => {
    this.setState({itemText: evt.target.value})
  }
  
  onFormSubmit = (evt) => {
    evt.preventDefault();
    this.props.onAddItemClick(this.state.itemText);
    this.setState({itemText: ''});
  }

  render() {
    return (
      <form
        className="item-add-form"
        onSubmit={this.onFormSubmit}
      >
        <input
          className="form-control"
          type="text"
          value={this.state.itemText}
          placeholder="enter the text of the task item"
          onInput={this.onItemFildInput}
        />
        <button className="btn btn-outline-secondary" type="submit">
          Add Item
        </button>
      </form>
    );
  }
}
