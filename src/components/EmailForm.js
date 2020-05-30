import React from 'react';
import { Form, FormGroup, Input, Label, Button } from 'reactstrap';
import axios from 'axios'
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
          name: "",
          email: "",
          feedback: "",
        };
  }

  handleInputChange(event) {
    event.preventDefault();
    const target = event.target;
    const name = target.name;
    const value = target.value;
    this.setState({ [name]: value });
  }

  sendMessage(event) {
    event.preventDefault();
  
  const templateParams = {
      from_name: this.state.name + " (" + this.state.email + ")",
      to_name: "adel.muursepp@gmail.com",
      feedback: this.state.feedback
    };

  emailjs.send("adel.muursepp@gmail.com", "template_wTL9PUJ4", templateParams,  "user_xStkakHLwpWvkvrfOMgnj")
      .then(
        function(response) {
          toast.success("Your message has successfully sent!", {
            position: toast.POSITION.BOTTOM_CENTER
          });
          console.log("SUCCESS!", response.status, response.text);
        },
        function(err) {
          toast.error("Your message was not able to be sent");
        }
    );

  this.setState({
      name: "",
      email: "",
      feedback: ""
    });
  }

  render() {
    return (
      <div className="col-8 mx-auto container">
        <form
          className="ui form section "
          id="contact-form"
          name={this.props.name}
          method={this.props.method}
          action={this.props.action}
        >
          <row className="vertical-content d-flex justify-content-between">
          <input
            id="name"
            name="name"
            onChange={this.handleInputChange.bind(this)}
            placeholder="Your name"
            className="form-control mr-3"
            required
            value={this.state.name}
            // style={{ width: "50%" }}
            rows={1}
          />
          <input
            id="email"
            name="email"
            onChange={this.handleInputChange.bind(this)}
            className="form-control ml-3"
            placeholder="Your email address"
            required
            value={this.state.email}
            // error={this.state.errors.email}
            // style={{ width: "50%" }}
            rows={1}
          />
          </row>
          <br />
          <textarea
            id="feedback"
            name="feedback"
            onChange={this.handleInputChange.bind(this)}
            className="form-control"
            placeholder="What questions do you have?"
            required
            value={this.state.feedback}
            style={{ width: "100%", height: "250px" }}
          />
          <br />
          <input
            type="button"
            value="Send"
            className="submitBnt btn btn-custom"
            onClick={this.sendMessage.bind(this)}
          />
        </form>
      </div>
    );
  };
}