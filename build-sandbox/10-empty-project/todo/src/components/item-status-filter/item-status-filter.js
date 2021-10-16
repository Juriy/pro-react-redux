import React, {Component} from 'react';

import './item-status-filter.css';

export default class ItemStatusFilter extends Component {
  createButtonObj = (label, name, isToggleButton = false) => {
    return {
      id: label,
      isToggleButton,
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
    const {onFilterButtonClick, activeFilter} = this.props;
    const activeButtonClasses = 'btn btn-info';
    const inactiveButtonClasses = 'btn btn-outline-secondary';

    const elementButtons = buttons.map((button) => {
      const {id, name, label} = button;
      const className = activeFilter === name ? activeButtonClasses : inactiveButtonClasses;

      return (
        <button key={id} type="button" className={className} onClick={() => onFilterButtonClick(name)}>
          {label}
        </button>
      );
    });

    return <div className="item-status-filter btn-group">{elementButtons}</div>;
  }
}
