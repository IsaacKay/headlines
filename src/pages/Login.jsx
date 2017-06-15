
import React from 'react';
import GoogleLogin from 'react-google-login';

/**
 * @description -Component for google login button
 */
export default class Login extends React.Component {
  /**
   * @return {void}
   * @param {object} user
   */
  static responseSuccess(user) {
    const userProfile = user.getBasicProfile();
    localStorage.setItem('user', userProfile);
    location.reload();
  }
  /**
   * @return {void}
   * @param {object} response response for login failure
   */
  static responseFailure(response) {
    this.props.router.push('login');
  }
  /**
   * @return {JSX.Element} - Google login button
   */
  render() {
    const gLogin = (
      <GoogleLogin
        clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
        buttonText="Login With Google+"
        onSuccess={Login.responseSuccess}
        onFailure={this.responseFailure}
      />
    );
    return gLogin;
  }
}
