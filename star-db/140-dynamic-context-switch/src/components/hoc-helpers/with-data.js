import React, { Component } from 'react';

import Spinner from '../spinner';

const withData = (View) => {
  return class extends Component {

    state = {
      data: null
    };

    componentDidUpdate(prevProps) {
      if (this.props.getData !== prevProps.getData) {
        this.update();
      }
    }

    componentDidMount() {
      this.update();
    }

    update() {
      this.props.getData()
        .then((data) => {
          this.setState({
            data
          });
        });
    }


    render() {
      const { data } = this.state;

      if (!data) {
        return <Spinner />;
      }

      return <View {...this.props} data={data} />;
    }
  };
};

export default withData;
