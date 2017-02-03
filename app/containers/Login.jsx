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

    _onShowLock = () => {
      this.props.actions.showLock();
    }

    _onLogout = () => {
      this.props.actions.logout();
    }

  render(){
    const { dispatch } = this.props;
    return (
      <div>
          <h1>Login</h1>
          <section>
            {
              this.props.authenticated ?
                <Button label='Logout' onClick={this._onLogout} /> :
                <Button label='Login' onClick={() => dispatch(this.props.actions.showLock())} />
            }
          </section>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connectProps(mapStateToProps, Login);