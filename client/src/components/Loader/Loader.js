import React from 'react';
import './Loader.scss';

class Loader extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div className="Loader">
        <div>Please wait, {this.props.message} </div>
        <div><i className="fas fa-spinner fa-pulse"></i></div>
      </div>
    );
  }
}

export default Loader;
