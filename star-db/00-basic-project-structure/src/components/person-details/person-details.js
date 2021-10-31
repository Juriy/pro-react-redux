import React, { Component } from 'react';

import './person-details.css';
import SwapiService from '../../services/swapi-service';
import Spinner from '../spinner/spinner';
import ErrorButton from '../error-button/error-button';

export default class PersonDetails extends Component {
  swapiService = new SwapiService();

  state = {
    person: null,
    hasLoading: false
  }

  componentDidUpdate(prevProps) {
    if (this.props.personId !== prevProps.personId) {
      this.updatePerson();
    }
  }

  updatePerson() {
    const {personId} = this.props;
    if (!personId) {
      return;
    }
    
    this.setState({hasLoading: true})

    this.swapiService
      .getPerson(personId)
      .then((person) => {
        this.setState({person, hasLoading: false});
      })     
  }

  componentDidMount() {
    this.updatePerson()
  }
  
  render() {
    const {person, hasLoading} = this.state
    const hasData = person && !hasLoading;
    
    const lolderIndicator = hasLoading ? <Spinner />: null;
    const content = hasData ? <PersonDetailsContent person={person} /> : null;
    const emptyContent = person ? null: <EmptyContent />;
    
    return (
      <div className="person-details card">
        {lolderIndicator}
        {content}
        {emptyContent}
      </div>
    )
  }
}

const PersonDetailsContent = ({person}) => {
  const {id, name, gender, birthYear, eyeColor} = person;
  return (
    <React.Fragment>
      <img className="person-image" alt=""
      src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} />

      <div className="card-body">
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="term">Gender</span>
            <span>{gender}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Birth Year</span>
            <span>{birthYear}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Eye Color</span>
            <span>{eyeColor}</span>
          </li>
        </ul>
        <ErrorButton />
      </div>
    </React.Fragment>
  )
}

const EmptyContent = () => {
  return <span>Select a person from a list</span>;
}