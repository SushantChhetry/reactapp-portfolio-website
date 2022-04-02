import React, { useRef } from "react";
import "./contact.css";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_a3n9map",
      "template_vuyl62s",
      form.current,
      "lj50x3xv2x8lok1S9"
    );
    e.target.reset();
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <EmailIcon className="contact__option-icon" />
            <h4>Email</h4>
            <h6>sushantchhetryacademics@gmail.com</h6>
            <a href="mailto:sushantchhetryacademics@gmail.com" target="_blank">
              Send message
            </a>
          </article>

          <article className="contact__option">
            <LocalPhoneIcon className="contact__option-icon" />
            <h4>Phone Number</h4>
            <h5>+12562253874</h5>
            <a
              href="https://api.wahtsapp.com/send?phone=+12562253874"
              target="_blank"
            >
              Send message
            </a>
          </article>

          {/*END OF CONTACT OPTION*/}

          <form ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              name="name"
              placeholder="Your Full Name"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />
            <textarea
              name="message"
              rows="7"
              placeholder="Your Message Here"
              required
            />
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
