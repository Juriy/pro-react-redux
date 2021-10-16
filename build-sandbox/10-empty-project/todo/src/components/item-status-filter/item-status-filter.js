import React, {Component} from 'react';

import './item-status-filter.css';

export default class ItemStatusFilter extends Component {
  createButtonObj = (label, name) => {
    return {
      id: label,
      label,
      name,
    };
  };

  state = {
    buttons: [this.createButtonObj('All', 'all'), this.createButtonObj('Active', 'active'), this.createButtonObj('Done', 'done')],
  }

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

    return <div className="btn-group">{elementButtons}</div>;
  }
}
