import React from 'react';

class AddCity extends React.Component {
  constructor(props) {
    super(props);

    this.textInput = React.createRef();
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(e) {
      e.preventDefault();
      this.props.addCity(this.textInput.current.value);
  }
  
  render() {
    return (
      <div className="AddCity">
          <form onSubmit={this.handleInput}>
              <input ref={this.textInput} />
              <button type="submit">Add</button>
          </form>
      </div>
    );
  }
}


export default AddCity;
