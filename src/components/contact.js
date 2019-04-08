import React, { Component } from "react";

class Contact extends Component {
  state = {
    message: undefined,
    code: undefined
  };

  contactForm = e => {
    e.preventDefault(); //to prevent reload
    const firstName = e.target.elements.firstName.value;
    const lastName = e.target.elements.lastName.value;
    const emailId = e.target.elements.emailId.value;
    const phoneNumber = e.target.elements.phoneNumber.value;

    if (
      firstName != "" &&
      lastName != "" &&
      emailId != "" &&
      phoneNumber != "" &&
      firstName != undefined &&
      lastName != undefined &&
      emailId != undefined &&
      phoneNumber != undefined
    ) {
      this.setState({
        message:
          "Thanks for contacting us! We will be in touch with you shortly.",
        code: true
      });
    } else {
      this.setState({
        message: "Failed to submit, try again.",
        code: false
      });
    }
  };

  render() {
    return (
      <div>
        <form onSubmit={this.contactForm}>
          <h3>Contact Us</h3>
          <input type="text" name="firstName" placeholder="First Name *" />
          <br />
          <br />
          <input type="text" name="lastName" placeholder="Last Name *" />
          <br />
          <br />
          <input type="email" name="emailId" placeholder="Email Address *" />
          <br />
          <br />
          <input
            type="tel"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}|[0-9]{10}"
            name="phoneNumber"
            placeholder="Contact Number (123-456-7890) *"
          />
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

export default Contact;
