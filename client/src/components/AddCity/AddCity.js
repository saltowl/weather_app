import React from "react";

class AddCity extends React.Component {
  constructor(props) {
    super(props);

    this.handleFormInput = this.handleFormInput.bind(this);
  }

  handleFormInput(e) {
    e.preventDefault();
    this.props.addCity(e.target[0].value);
  }

  render() {
    return (
      <div className="AddCity">
        <form onSubmit={this.handleFormInput}>
          <input
            id="addCity"
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
