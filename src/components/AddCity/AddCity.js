import React from "react";

class AddCity extends React.Component {
  constructor(props) {
    super(props);

    this.textInput = React.createRef();
    this.handleFormInput = this.handleFormInput.bind(this);
  }

  handleFormInput(e) {
    e.preventDefault();
    this.props.addCity(this.textInput.current.value);
  }

  render() {
    return (
      <div className="AddCity">
        <form onSubmit={this.handleFormInput}>
          <input
            id="addCity"
            ref={this.textInput}
            placeholder="Add new city"
            required
          />
          <button type="submit" className="circle">
            +
          </button>
        </form>
      </div>
    );
  }
}

export default AddCity;
