import React, {Component} from 'react';

import './item-status-filter.css';

export default class ItemStatusFilter extends Component {
  createButtonObj = (label, name) => {
    return {
      label,
      name,
    };
  };

  state = {
    buttons: [
      this.createButtonObj('Active', 'active'),
      this.createButtonObj('Done', 'done'),
      this.createButtonObj('All', 'all'),
    ],
  };

  render() {
    const {buttons} = this.state;
    const {onFilterButtonClick, activeFilter} = this.props;

    const activeButtonClasses = 'btn-info';
    const inactiveButtonClasses = 'btn-outline-secondary';

    const elementButtons = buttons.map((button) => {
      const {name, label} = button;
      const className = activeFilter === name ? activeButtonClasses : inactiveButtonClasses;

      return (
        <button key={label} type="button" className={`btn ${className}`} onClick={() => onFilterButtonClick(name)}>
          {label}
        </button>
      );
    });

    return (
      <div className="item-status-filter btn-group">
        {elementButtons}
      </div>
    );
  }
}
