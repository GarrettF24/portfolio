// import React, { useRef } from "react"
// import emailjs from "emailjs-com"

// export const Contact = () => {
//   const form = useRef()

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
//   }

//   return (
//     <form ref={form} onSubmit={sendEmail}>
//       <label>Name</label>
//       <input type="text" name="user_name" />
//       <label>Email</label>
//       <input type="email" name="user_email" />
//       <label>Message</label>
//       <textarea name="message" />
//       <input type="submit" value="Send" />
//     </form>
//   )
// }

import "./Contact.css"
import React, { useRef } from "react"
import emailjs from "emailjs-com"
import { useHistory } from "react-router-dom"
import { Link } from "react-router-dom"

const Contact = () => {
  const form = useRef()
  let history = useHistory()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        "service_8b6kcli",
        "template_87gxjuy",
        form.current,
        "user_apGuPMUeZgOhRFYShPD9Q"
      )
      .then(
        (result) => {
          console.log(result.text)
        },
        (error) => {
          console.log(error.text)
        }
      )
    history.push("/")
  }

  return (
    <div className="main-container3">
      <div className="form-div">
        <div className="form-input">
          <form className="form" ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              name="from_name"
              placeholder="Name:"
              className="input"
            />
            <br />
            <input
              type="email"
              name="from_email"
              placeholder="Email:"
              className="input"
            />
            <br />
            <textarea name="message" placeholder="Message:" className="input" />
            <br />
            <input type="submit" value="Send" className="sendbtn" />
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
