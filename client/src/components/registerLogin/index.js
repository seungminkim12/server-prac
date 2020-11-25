import React, { Component, useState } from "react";
import { connect, useDispatch } from "react-redux";
import { loginUser } from "../../actions/user_actions";
import { useHistory } from "react-router-dom";

/*
const RegisterLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const history = useHistory();
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    if (event.target.name === "email") {
      setEmail(value);
    } else {
      setPassword(value);
    }
  };
  const displayErrors = (errors) => {
    errors.map((error, i) => {
      return <div key={i}>{error}</div>;
    });
  };

  const submitForm = (event) => {
    event.preventDefault();

    let dataToSubmit = {
      email,
      password,
    };

    if (isFormValid(email, password)) {
      dispatch(loginUser(dataToSubmit)).then((response) => {
        if (response.payload.loginSuccess) {
          history.push("/");
        } else {
          setErrors(errors.concat("Failed to Login, Check your account"));
        }
      });
    } else {
      setErrors(errors.concat("Form is not valid"));
    }
  };

  const isFormValid = ({ email, password }) => email && password;

  return (
    <div className="container">
      <h2>Log in</h2>
      <div className="row">
        <form className="col 12">
          <div className="row ">
            <div className="input-field col s12">
              <input
                name="email"
                value={email}
                onChange={handleChange}
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
                value={password}
                onChange={handleChange}
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

          {errors && <div>{displayErrors(errors)}</div>}

          <div className="row">
            <div className="col 12">
              <button
                className="btn waves-effect red lighten-2"
                type="submit"
                name="action"
                onClick={submitForm}
              >
                Login
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    user: state.user,
  };
}

export default connect(mapStateToProps)(RegisterLogin);

*/
class RegisterLogin extends Component {
  state = {
    email: "",
    password: "",
    errors: [],
  };

  displayErrors = (errors) => {
    errors.map((error, i) => {
      return <div key={i}>{error}</div>;
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
