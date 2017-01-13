import React, {Component} from 'react';
import connectProps from '../utils/redux-connect-helper'
import Input from 'react-toolbox/lib/input';
import {Button} from 'react-toolbox/lib/button';

class Login extends Component {
    
    // Initial component state
    state = {
        username: '',
        password: ''
    }

    _onUsernameChange = (value) => {
      this.setState({username: value});
    }

    _onPasswordChange = (value) => {
      this.setState({password: value});
    }

    _onSigninButtonClicked = () => {
      this.props.actions.userLoginRequest(this.state.username, this.state.password);
    }

  render(){
    return (
      <div>
          <h1>Login</h1>
          <section>
            <Input type='text' hint='Enter your username' label='Username' name='username' value={this.state.username} onChange={this._onUsernameChange} maxLength={16} />
            <Input type='password' hint='Enter your password' name='name' value={this.state.password} onChange={this._onPasswordChange} maxLength={16} />
            <Button label='Sign in' onClick={this._onSigninButtonClicked} />
          </section>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connectProps(mapStateToProps, Login);