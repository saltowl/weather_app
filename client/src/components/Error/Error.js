import React from 'react';
import './Error.scss';

class Error extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div className="Error">
          <div>Cannot {this.props.message}</div>
      </div>
    );
  }
}

export default Error;
