import React, {Component} from 'react';

import './item-status-filter.css';

export default class ItemStatusFilter extends Component {
  render() {
    const {buttons, onFilterButtonClick} = this.props;
    
    const elementButtons = buttons.map((button) => {
      const {id, label, isActive} = button;
      const activeButtonClasses = 'btn btn-info';
      const inactiveButtonClasses = 'btn btn-outline-secondary';
      const className = isActive ? activeButtonClasses : inactiveButtonClasses;

      return (
        <button key={id} type="button" className={className} onClick={() => onFilterButtonClick(id, label)}>
          {label}
        </button>
      );
    });

    return <div className="btn-group">{elementButtons}</div>;
  }
}
