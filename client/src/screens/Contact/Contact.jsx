// // import React, { useRef } from "react"
// // import emailjs from "emailjs-com"

// // export const Contact = () => {
// //   const form = useRef()

// //   const sendEmail = (e) => {
// //     e.preventDefault()

// //     emailjs
// //       .sendForm(
// //         "service_8b6kcli",
// //         "template_87gxjuy",
// //         form.current,
// //         "user_apGuPMUeZgOhRFYShPD9Q"
// //       )
// //       .then(
// //         (result) => {
// //           console.log(result.text)
// //         },
// //         (error) => {
// //           console.log(error.text)
// //         }
// //       )
// //   }

// //   return (
// //     <form ref={form} onSubmit={sendEmail}>
// //       <label>Name</label>
// //       <input type="text" name="user_name" />
// //       <label>Email</label>
// //       <input type="email" name="user_email" />
// //       <label>Message</label>
// //       <textarea name="message" />
// //       <input type="submit" value="Send" />
// //     </form>
// //   )
// // }

// import "./Contact.css"
// import React, { useRef } from "react"
// import emailjs from "emailjs-com"
// import { useHistory } from "react-router-dom"
// import { Link } from "react-router-dom"

// const Contact = () => {
//   const form = useRef()
//   let history = useHistory()

//   const sendEmail = (e) => {
//     e.preventDefault()

//     emailjs
//       .sendForm(
//         "service_8b6kcli",
//         "template_87gxjuy",
//         form.current,
//         "user_apGuPMUeZgOhRFYShPD9Q"
//       )
//       .then(
//         (result) => {
//           console.log(result.text)
//         },
//         (error) => {
//           console.log(error.text)
//         }
//       )
//     history.push("/")
//   }

//   return (
//     <div className="main-container3">
//       <div className="form-div">
//         <div className="form-input">
//           <form className="form" ref={form} onSubmit={sendEmail}>
//             <input
//               type="text"
//               name="from_name"
//               placeholder="Name:"
//               className="input"
//             />
//             <br />
//             <input
//               type="email"
//               name="from_email"
//               placeholder="Email:"
//               className="input"
//             />
//             <br />
//             <textarea name="message" placeholder="Message:" className="input" />
//             <br />
//             <input type="submit" value="Send" className="sendbtn" />
//           </form>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Contact

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
          name="from_email"
          placeholder="Email…"
          required
          icon="mail"
          iconPosition="left"
        />
        <Form.Field
          id="form-input-control-last-name"
          control={Input}
          label="Name"
          name="from_name"
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
