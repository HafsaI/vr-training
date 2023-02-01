import React, { Component } from 'react'


class SignIn extends Component {
  render() {
    return (
      <div>
        <form id="signin">
            <label for="email">Email: </label>
            <input type = "text" name="email"/>
            <label for="password">Password: </label>
            <input type = "password" name="password"/>
            <input type="submit"/>
        </form>
      </div>
    )
  }
}

export default SignIn