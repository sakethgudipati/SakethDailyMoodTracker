import { Component } from 'react';
import { Navigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import './index.css';

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    errorMsg: '',
    showErr: false,
    inputField: false,
    isLoggedIn: false,  // Added to handle redirection after successful login
  };

  onSubmitSuccess = jwtToken => {
    Cookies.set('jwt_token', jwtToken, {
      expires: 30,
      path: '/',
    });
    this.setState({ isLoggedIn: true });  // Set login state to true on success
  };

  onSubmitFailure = errMsg => {
    this.setState({ errorMsg: errMsg, showErr: true });
  };

  onChangeUsername = event => {
    this.setState({ username: event.target.value });
  };

  onChangePassword = event => {
    this.setState({ password: event.target.value });
  };

  onChangeInputField = () => {
    this.setState(prevState => ({ inputField: !prevState.inputField }));
  };

  submitForm = async event => {
    event.preventDefault();
    const { username, password } = this.state;
    const userDetails = { username, password };
    const url = 'https://apis.ccbp.in/login';
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    };
    const response = await fetch(url, options);
    const data = await response.json();
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token);
    } else {
      this.onSubmitFailure(data.error_msg);
    }
  };

  render() {
    const { showErr, errorMsg, inputField, isLoggedIn } = this.state;
    const jwtToken = Cookies.get('jwt_token');

    // Handle redirection after login
    if (jwtToken !== undefined || isLoggedIn) {
      return <Navigate to="/" />;
    }

    return (
      <div className="login-background-container">
        <div className="login-container">
          <h1 className="login-heading">Daily Mood Tracker</h1>
          <form className="login-form" onSubmit={this.submitForm}>
            <label className="label-element" htmlFor="username">
              Username
            </label>
            <input
              type="text"
              placeholder="Username"
              className="input-element"
              id="username"
              onChange={this.onChangeUsername}
            />
            <label className="label-element" htmlFor="password">
              Password
            </label>
            <input
              type={inputField ? 'text' : 'password'}
              placeholder="Password"
              className="input-element"
              id="password"
              onChange={this.onChangePassword}
            />
            <div>
              <input
                className="checkbox-element"
                type="checkbox"
                id="login-check"
                onChange={this.onChangeInputField}
              />
              <label className="label-element" htmlFor="login-check">
                Show Password
              </label>
            </div>
            <button className="login-button" type="submit">
              Login
            </button>
            {showErr && <p className="error-message">{errorMsg}</p>}
          </form>
        </div>
      </div>
    );
  }
}

export default LoginForm;
