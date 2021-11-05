import React, { Component } from 'react';

import SwapiService from '../../services/swapi-service';
import Spinner from '../spinner/spinner';

const withData = (View) => {
  return class extends Component {
    swapiService = new SwapiService()

    state = {
      data: null
    }
  
    componentDidUpdate(prevProps) {
      if (this.props.getData !== prevProps.getData) {
        this.uptade();
      }
    }
    
    componentDidMount() {
      this.uptade()
    }

    uptade() {
      this.props.getData()
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