import React, { Component } from "react";

class RegisterLogin extends Component {
  render() {
    return (
      <div className="container">
        <h2>Log in</h2>
        <div className="row">
          <form className="col 12" onSubmit={(event) => this.submitForm(event)}>
            <div className="row ">
              <input
                name="email"
                value={this.state.email}
                onChange={(event) => this.handleChange(event)}
                id="email"
                type="email"
                className="validate"
              />
              <label htmlFor="email">Email</label>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default RegisterLogin;
