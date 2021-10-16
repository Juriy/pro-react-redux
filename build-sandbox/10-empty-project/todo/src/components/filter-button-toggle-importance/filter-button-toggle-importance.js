import React, {Component} from 'react';

import './filter-button-toggle-importance.css';

export default class FilterButtonToggleImportance extends Component {
  render() {
    const {isActive, label, onButtonClick} = this.props;

    const activeButtonClasses = 'btn-success';
    const inactiveButtonClasses = 'btn-outline-success';
    const className = isActive ? activeButtonClasses : inactiveButtonClasses;
    
    return (
      <button type="button" className={`filter-button-toggle-importance btn ${className}`} onClick={() => onButtonClick(this.props.onButtonClick)}>
        {label}
      </button>
    );
  }
}
