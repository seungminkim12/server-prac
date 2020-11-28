import React, { Component } from "react";
import { connect } from "react-redux";
import { registerUser } from "../../actions/user_actions";

class Register extends Component {
  state = {
    email: "",
    password: "",
    passwordConfirm: "",
    name: "",
    lastname: "",
    errors: [],
  };

  handleChange = (event) => {
    const { target } = event;
    this.setState({ [target.name]: target.value });
  };

  displayErrors = (errors) => {
    errors.map((error, i) => <p key={i}>{error}</p>);
  };

  isFormValid = () => {
    let errors = [];
    let error;

    if (this.isFormEmpty(this.state)) {
      error = { message: "Fill in all fields" };
      this.setState({ errors: errors.concat(error) });
    } else if (!this.isPasswordValid(this.state)) {
      error = { message: "Password is invalid" };
      this.setState({ errors: errors.concat(error) });
    } else {
      return true;
    }
  };

  isPasswordValid = ({ password, passwordConfirm }) => {
    if (password.length < 6 || passwordConfirm.length < 6) {
      return false;
    } else if (password !== passwordConfirm) {
      return false;
    } else {
      return true;
    }
  };

  isFormEmpty = ({ email, name, lastname, password, passwordConfirm }) => {
    return (
      !email.length ||
      !name.length ||
      !lastname.length ||
      !password.length ||
      !passwordConfirm.length
    );
  };

  submitForm = (event) => {
    event.preventDefault();

    let dataToSubmit = {
      email: this.state.email,
      lastname: this.state.lastname,
      name: this.state.name,
      password: this.state.password,
      passwordConfirm: this.state.passwordConfirm,
    };

    if (this.isFormValid()) {
      this.setState({ errors: [] });
      this.props
        .dispatch(registerUser(dataToSubmit))
        .then((response) => {
          console.log(response);
          if (response.payload.success) {
            this.props.history.push("/login");
          } else {
            this.setState({
              errors: this.state.errors.concat("Register Failed"),
            });
          }
        })
        .catch((err) => {
          this.setState({
            errors: this.state.errors.concat(err),
          });
        });
    } else {
      console.error("Form is not valid");
    }
  };

  render() {
    return (
      <div className="container">
        <h2>Sign In</h2>
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
                <label className="active" htmlFor="email">
                  Email
                </label>
                <span
                  className="helper-text"
                  data-error="Type a right type email"
                  data-success="right"
                />
              </div>
            </div>

            <div className="row ">
              <div className="input-field col s12">
                <input
                  name="lastname"
                  value={this.state.lastname}
                  onChange={(event) => this.handleChange(event)}
                  id="lastname"
                  type="text"
                  className="validate"
                />
                <label className="active" htmlFor="lastname">
                  Lastname
                </label>
                <span
                  className="helper-text"
                  data-error="Type a right type lastname"
                  data-success="right"
                />
              </div>
            </div>

            <div className="row ">
              <div className="input-field col s12">
                <input
                  name="name"
                  value={this.state.name}
                  onChange={(event) => this.handleChange(event)}
                  id="name"
                  type="text"
                  className="validate"
                />
                <label className="active" htmlFor="name">
                  Name
                </label>
                <span
                  className="helper-text"
                  data-error="Type a right type name"
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
                <label className="active" htmlFor="password">
                  Password
                </label>
                <span
                  className="helper-text"
                  data-error="Wrong password"
                  data-success="right"
                />
              </div>
            </div>

            <div className="row">
              <div className="input-field col s12">
                <input
                  name="passwordConfirm"
                  value={this.state.passwordConfirm}
                  onChange={(event) => this.handleChange(event)}
                  id="passwordConfirm"
                  type="password"
                  className="validate"
                />
                <label className="active" htmlFor="passwordConfirm">
                  PasswordConfirm
                </label>
                <span
                  className="helper-text"
                  data-error="Wrong password"
                  data-success="right"
                />
              </div>
            </div>

            {this.state.errors.length > 0 && (
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
                  Sign up
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default connect()(Register);
