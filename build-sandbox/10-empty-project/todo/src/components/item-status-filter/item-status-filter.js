import React, {Component} from 'react';

import './item-status-filter.css';

export default class ItemStatusFilter extends Component {
  createButtonObj = (label, name, isImportantButton = false) => {
    return {
      id: label,
      isImportantButton,
      label,
      name,
    };
  };

  state = {
    buttons: [
      this.createButtonObj('All', 'all'),
      this.createButtonObj('Active', 'active'),
      this.createButtonObj('Done', 'done'),
      this.createButtonObj('Important', 'important', true),
    ],
  };

  render() {
    const {buttons} = this.state;
    const {onFilterButtonClick, activeFilter, isImportantFilter, onFilterImportantClick} = this.props;
    const activeButtonClasses = 'btn-info';
    const inactiveButtonClasses = 'btn-outline-secondary';

    const elementButtons = buttons.map((button) => {
      const {id, name, label, isImportantButton} = button;
      
      if (isImportantButton) {
        const activeButtonClasses = 'btn-success';
        const inactiveButtonClasses = 'btn-outline-success';
        const className = isImportantFilter ? activeButtonClasses : inactiveButtonClasses;
        return (
          <button key={id} type="button" className={`btn ${className}`} onClick={onFilterImportantClick}>
            {label}
          </button>
        );
      }
      
      const className = activeFilter === name ? activeButtonClasses : inactiveButtonClasses;
      return (
        <button key={id} type="button" className={`btn ${className}`} onClick={() => onFilterButtonClick(name)}>
          {label}
        </button>
      );
    });

    return <div className="item-status-filter btn-group">{elementButtons}</div>;
  }
}
