import EmailForm from "./EmailForm";
import { useState } from "react";

const Contact = () => {
  const [emailFormHidden, setEmailFormHidden] = useState(false);

  const handleEmailClick = () => {
    setEmailFormHidden(true);
  };

  const handleLinkedInClick = () => {
    window.open("https://www.linkedin.com/in/ryan-karakoc", "_blank").focus();
  };

  return (
    <div className="contact">
      <h1>Contact</h1>
      <p className="divider">------------------</p>
      <p className="contactText">
        Thanks for your interest in contacting me. Here are best ways to do it…
      </p>
      <h2 id="emailTitle" onClick={handleEmailClick}>
        Send me an email!
      </h2>
      {emailFormHidden ? (
        <EmailForm
          emailFormHidden={emailFormHidden}
          setEmailFormHidden={setEmailFormHidden}
        />
      ) : null}
      <h2 id="LinkedInTitle" onClick={handleLinkedInClick}>
        LinkedIn
      </h2>
    </div>
  );
};

export default Contact;
