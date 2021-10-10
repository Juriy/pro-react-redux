import React, {Component} from 'react';

import './todo-list-item.css';

export default class TodoListItem extends Component {
  state = {
    done: false,
    important: false,
  };

  render() {
    const {label, done, important, onDeleteButtonClick, onToggleDoneClick, onToggleImportantClick} = this.props;

    const DONE_CLASS_NAME = 'done';
    const IMPORTANT_CLASS_NAME = 'important';

    const classes = ['todo-list-item'];

    if (done) {
      classes.push(DONE_CLASS_NAME);
    }

    if (important) {
      classes.push(IMPORTANT_CLASS_NAME);
    }

    return (
      <span className={classes.join(' ')}>
        <span className="todo-list-item-label" onClick={onToggleDoneClick}>
          {label}
        </span>

        <button type="button" className="btn btn-outline-success btn-sm float-right" onClick={onToggleImportantClick}>
          <i className="fa fa-exclamation" />
        </button>

        <button type="button" className="btn btn-outline-danger btn-sm float-right" onClick={onDeleteButtonClick}>
          <i className="fa fa-trash-o" />
        </button>
      </span>
    );
  }
}
