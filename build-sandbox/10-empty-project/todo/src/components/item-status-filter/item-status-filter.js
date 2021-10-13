import React, {Component} from 'react';

import './item-status-filter.css';

export default class ItemStatusFilter extends Component {
  createButtonObj = (label, isActive) => {
    return {
      id: label,
      isActive,
      label,
    };
  };

  state = {
    buttons: [this.createButtonObj('all', true), this.createButtonObj('active'), this.createButtonObj('done')],
  }

  render() {
    const {onFilterButtonClick} = this.props;
    const {buttons} = this.state;

    const activeButtonClasses = 'btn btn-info';
    const inactiveButtonClasses = 'btn btn-outline-secondary';

    const elemenButtons = buttons.map((button) => {
      const {id, label, isActive} = button;
      const className = isActive ? activeButtonClasses : inactiveButtonClasses;

      return (
        <button key={id} type="button" className={className} onClick={() => onFilterButtonClick(id, label)}>
          {label}
        </button>
      );
    });

    return <div className="btn-group">{elemenButtons}</div>;
  }
}
