import React, { Component } from 'react';

import './item-list.css';
import SwapiService from '../../services/swapi-service';
import Spinner from '../spinner/spinner';

const withData = (View, getData) => {
  return class extends Component {
    swapiService = new SwapiService()

    state = {
      data: null
    }
  
    componentDidMount() {
      getData()
        .then((data) => {
          this.setState({
            data
          });
        })
    }

    render() {
      const {data} = this.state;
    
      if (!data) {
        return <Spinner />;
      }  

      return (
        <View {...this.props} data={data} />
      )
    }
  };
}

export default withData;