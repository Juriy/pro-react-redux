import React, {Component} from 'react';

import './item-status-filter.css';

export default class ItemStatusFilter extends Component {
  maxId = 200;
  activeButtonClasses = 'btn btn-info';
  inactiveButtonClasses = 'btn btn-outline-secondary';

  createButtonObj = (label, isActive) => {
    return {
      id: this.maxId++,
      isActive,
      label,
    };
  };

  onActiveFilterButtonClick = (buttonId) => {
    this.setState(({buttons}) => {
      const newArr = [
        ...buttons.map((button, index) => {
          if (buttonId === button.id) {
            return {...button, isActive: true};
          }
          return {...button, isActive: false};
        }),
      ];

      return {buttons: newArr};
    });
  };

  state = {
    buttons: [this.createButtonObj('all', true), this.createButtonObj('active'), this.createButtonObj('done')],
  };

  render() {
    const {onActiveFilterButtonClick} = this;
    const {buttons} = this.state;
    const activeButtonClasses = 'btn btn-info';
    const inactiveButtonClasses = 'btn btn-outline-secondary';

    const elemenButtons = buttons.map((button) => {
      const {id, label, isActive} = button;
      const className = isActive ? activeButtonClasses : inactiveButtonClasses;

      return (
        <button key={id} type="button" className={className} onClick={() => onActiveFilterButtonClick(id)}>
          {label}
        </button>
      );
    });

    return <div className="btn-group">{elemenButtons}</div>;
  }
}
