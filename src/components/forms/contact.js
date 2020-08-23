import React from "react";
import { Form, Button } from "react-bootstrap";
import { DiGithub } from "react-icons/di";
import { FaLinkedinIn } from "react-icons/fa";
import "./contact.css";
import * as emailjs from "emailjs-com";

class Contact extends React.Component {
  state = {
    email: "",
    job: "",
    message: ""
  };

  handleSubmit(e) {
    e.preventDefault();
    const { email, job, message } = this.state;
    console.log("sending email");

    let templateParam = {
      from_name: email,
      to_name: "mrandhawa@ucdavis.edu",
      subject: job,
      message_html: message
    };

    let templateParams = {
      from_name: "mehtabpro@outlook.com",
      to_name: "mrandhawa@ucdavis.edu",
      subject: "front_end-job",
      message_html: "this suksss"
    };

    emailjs.send(
      "gmail",
      "template_Yv6JqSWX",
      templateParams,
      "user_ajaCH40HinVw8m3o9agyR"
    );
    this.resetForm();
  }

  resetForm() {
    this.setState({
      email: "",
      job: "",
      message: ""
    });
  }

  handleChange = (param, e) => {
    this.setState({ [param]: e.target.value });
  };
  render() {
    return (
      <>
        <header className="header1">
          <img
            className="background_pic"
            src={require("../../images/another_flock.jpeg")}
            alt="fog over the bay"
          />
        </header>
        <h1 className="title_form">Contact </h1>
        <h1 className="title_form">
          <a className="iconlink" href="https://github.com/mehtab98">
            <DiGithub />
          </a>{" "}
          <a
            className="iconlink"
            href="https://www.linkedin.com/in/mehtab-randhawa-a83786177/"
          >
            <FaLinkedinIn />
          </a>{" "}
        </h1>

        <body className="form_body">
          <Form className="form_style">
            <Form.Group
              className="form_input"
              controlId="exampleForm.ControlInput1"
            >
              <Form.Label className="labels">Email address:</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={this.state.email}
                onChange={this.handleChange.bind(this, "email")}
                label="email"
                placeholder="name@example.com"
              />
            </Form.Group>

            <Form.Group
              className="form_input"
              controlId="exampleForm.ControlSelect1"
            >
              <Form.Label className="labels">Example select:</Form.Label>
              <Form.Control
                type="text"
                name="job"
                label="job"
                onChange={this.handleChange.bind(this, "job")}
                value={this.state.job}
                as="select"
              >
                <option value="frontend">Frontend Job</option>
                <option value="backend">Backend Job</option>
                <option value="password">Password</option>
              </Form.Control>
            </Form.Group>

            <Form.Group
              className="form_input"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label
                type="textarea"
                name="message"
                label="message"
                className="labels"
                value={this.state.message}
                onChange={this.handleChange.bind(this, "message")}
              >
                More Information:
              </Form.Label>
              <Form.Control as="textarea" rows="3" />
            </Form.Group>

            <Button className="form_submit" variant="secondary" type="submit">
              Submit
            </Button>
          </Form>
        </body>
      </>
    );
  }
}
export default Contact;
