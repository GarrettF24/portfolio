import React from "react"
import { Form, Input, TextArea, Button } from "semantic-ui-react"
import Swal from "sweetalert2"
import emailjs from "emailjs-com"
import "./Contact.css"

const SERVICE_ID = "service_8b6kcli"
const TEMPLATE_ID = "template_87gxjuy"
const USER_ID = "user_apGuPMUeZgOhRFYShPD9Q"

export default function Contact() {
  const handleOnSubmit = (e) => {
    e.preventDefault()
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID).then(
      (result) => {
        console.log(result.text)
        Swal.fire({
          icon: "success",
          title: "Message Sent Successfully",
        })
      },
      (error) => {
        console.log(error.text)
        Swal.fire({
          icon: "error",
          title: "Ooops, something went wrong",
          text: error.text,
        })
      }
    )
    e.target.reset()
  }
  return (
    <div className="contact-form">
      <Form onSubmit={handleOnSubmit}>
        <Form.Field
          id="form-input-control-email"
          control={Input}
          label="Email"
          name="user_email"
          placeholder="Email…"
          required
          icon="mail"
          iconPosition="left"
        />
        <Form.Field
          id="form-input-control-last-name"
          control={Input}
          label="Name"
          name="user_name"
          placeholder="Name…"
          required
          icon="user circle"
          iconPosition="left"
        />
        <Form.Field
          id="form-textarea-control-opinion"
          control={TextArea}
          label="Message"
          name="user_message"
          placeholder="Message…"
          required
        />
        <Button type="submit" color="green">
          Submit
        </Button>
      </Form>
      <div className="professional-links">
        <a target="_blank" href="https://www.linkedin.com/in/garrettfoster24/">
          LinkedIn
        </a>
        <a target="_blank" href="https://github.com/WAMS24">
          Github
        </a>
        <a target="_blank" href="https://github.com/WAMS24">
          Github
        </a>
      </div>
    </div>
  )
}
