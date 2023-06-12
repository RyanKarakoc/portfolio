import { useState } from "react";
import EmailForm from "./EmailForm";

const Contact = () => {
  const [emailFormHidden, setEmailFormHidden] = useState(false);

  const handleEmailClick = () => {
    setEmailFormHidden(true);
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
      {emailFormHidden ? <EmailForm /> : null}
      <h2 id="LinkedInTitle">LinkedIn</h2>
    </div>
  );
};

export default Contact;
