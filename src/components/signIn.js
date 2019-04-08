import React, { Component } from "react";

class SignIn extends Component {
  state = {
    message: undefined,
    code: undefined
  };
  signinForm = e => {
    e.preventDefault(); //to prevent reload
    const emailId = e.target.elements.emailId.value;
    const password = e.target.elements.password.value;

    if (emailId == "niketbajaj08@gmail.com" && password == "Password123") {
      this.setState({
        message: "Successfully Signed.",
        code: true
      });
    } else {
      this.setState({
        message: "Failed to signed, try again.",
        code: false
      });
    }
  };

  render() {
    return (
      <div>
        <form onSubmit={this.signinForm}>
          <h3>Sign In</h3>
          <input type="text" name="emailId" placeholder="Email Address *" />
          <br />
          <br />
          <input type="password" name="password" placeholder="Password *" />
          <br />
          <br />
          <button>Submit</button>
        </form>
        {this.state.code == true && (
          <p className="weather_value">{this.state.message}</p>
        )}
        {this.state.code == false && (
          <p className="weather_error">{this.state.message}</p>
        )}
      </div>
    );
  }
}

export default SignIn;
