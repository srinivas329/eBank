import {Component} from 'react'

import './index.css'

class Login extends Component {
  state = {userId: '', pin: ''}

  onChangeUserId = event => {
    this.setState({userId: event.target.value})
  }

  onChangePin = event => {
    this.setState({pin: event.target.value})
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {userId, pin} = this.state
    const userDetails = {userId, pin}
    const url = 'https://apis.ccbp.in/ebank/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data)
  }

  render() {
    const {userId, pin} = this.state
    console.log(userId, pin)
    return (
      <div className="login-bg">
        <div className="login-card-bg">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ebank-login-img.png "
            alt="login"
          />
          <div>
            <form className="login-form" onSubmit={this.onSubmitForm}>
              <h1 className="welcome-text">Welcome Back!</h1>
              <div>
                <label htmlFor="userId">User ID</label>
                <br />
                <input
                  value={userId}
                  onChange={this.onChangeUserId}
                  className="input"
                  id="userId"
                  type="text"
                />
                <br />
                <label htmlFor="pin">PIN</label>
                <br />
                <input
                  onChange={this.onChangePin}
                  value={pin}
                  className="input"
                  id="pin"
                  type="password"
                />
                <br />
              </div>
              <br />
              <button className="login-button" type="submit">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Login
