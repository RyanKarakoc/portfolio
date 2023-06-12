import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import EmailCompletionModal from "./EmailCompletionModal";

const EmailForm = ({ emailFormHidden, setEmailFormHidden }) => {
  const [emailSent, setEmailSent] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_1siyl8x",
        "template_cv825hr",
        form.current,
        "xdbN2KzVzbdOFjdnF"
      )
      .then(
        (result) => {
          console.log(`Email Sent: ${result.text}`);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    setEmailSent(true);
  };

  return (
    <div className="emailForm">
      {emailSent ? (
        <EmailCompletionModal
          setEmailSent={setEmailSent}
          setEmailFormHidden={setEmailFormHidden}
        />
      ) : null}
      <div className="formContainer">
        <form ref={form} onSubmit={sendEmail} autoComplete="off">
          <input
            type="text"
            id="firstName"
            name="user_firstName"
            placeholder="Your First Name"
            required
          />
          <input
            type="text"
            id="secondName"
            name="user_secondName"
            placeholder="Your Second Name"
            required
          />
          <input
            type="email"
            id="email"
            name="user_email"
            placeholder="Your Email address"
            required
          />
          <input
            type="text"
            id="subject"
            name="subject"
            placeholder="Subject"
            required
          />
          <textarea
            id="emailMessage"
            name="user_message"
            rows="10"
            placeholder="Your message here..."
            required
          />
          <button>Send</button>
        </form>
      </div>
    </div>
  );
};

export default EmailForm;
