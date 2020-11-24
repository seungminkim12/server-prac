import React, { Component } from "react";
import { connect } from "react-redux";
import { loginUser } from "../../actions/user_actions";

class RegisterLogin extends Component {
  state = {
    email: "",
    password: "",
    errors: [],
  };

  displayErrors = (errors) => {
    errors.map((error, i) => {
      <div key={i}>{error}</div>;
    });
  };

  handleChange = (event) => {
    const { target } = event;
    this.setState({ [target.name]: target.value });
    console.log(this.state.errors);
  };

  submitForm = (event) => {
    event.preventDefault();

    let dataToSubmit = {
      email: this.state.email,
      password: this.state.password,
    };

    if (this.isFormValid(this.state)) {
      this.setState({ errors: [] });
      this.props.dispatch(loginUser(dataToSubmit)).then((response) => {
        if (response.payload.loginSuccess) {
          this.setState({
            errors: this.state.errors.concat(
              "Failed to Login, Check your account"
            ),
          });
          this.props.history.push("/");
        } else {
          this.setState({
            errors: this.state.errors.concat(
              "Failed to Login, Check your account"
            ),
          });
        }
      });
    } else {
      this.setState({
        errors: this.state.errors.concat("Form is not valid"),
      });
    }
  };

  isFormValid = ({ email, password }) => email && password;

  render() {
    return (
      <div className="container">
        <h2>Log in</h2>
        <div className="row">
          <form className="col 12">
            <div className="row ">
              <div className="input-field col s12">
                <input
                  name="email"
                  value={this.state.email}
                  onChange={(event) => this.handleChange(event)}
                  id="email"
                  type="email"
                  className="validate"
                />
                <label htmlFor="email">Email</label>
                <span
                  className="helper-text"
                  data-error="Type a right type email"
                  data-success="right"
                />
              </div>
            </div>

            <div className="row">
              <div className="input-field col s12">
                <input
                  name="password"
                  value={this.state.password}
                  onChange={(event) => this.handleChange(event)}
                  id="password"
                  type="password"
                  className="validate"
                />
                <label htmlFor="password">Password</label>
                <span
                  className="helper-text"
                  data-error="Wrong password"
                  data-success="right"
                />
              </div>
            </div>

            {this.state.errors && (
              <div>{this.displayErrors(this.state.errors)}</div>
            )}

            <div className="row">
              <div className="col 12">
                <button
                  className="btn waves-effect red lighten-2"
                  type="submit"
                  name="action"
                  onClick={this.submitForm}
                >
                  Login
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
  };
}

export default connect(mapStateToProps)(RegisterLogin);
