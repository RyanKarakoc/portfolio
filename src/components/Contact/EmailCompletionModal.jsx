const EmailCompletionModal = ({ setEmailSent, setEmailFormHidden }) => {
  const closeModal = () => {
    setEmailSent(false);
    setEmailFormHidden(false);
  };

  return (
    <div className="modal-container">
      <p id="modalX" onClick={closeModal}>
        x
      </p>
      <h1 id="modalText">Message Sent</h1>
    </div>
  );
};

export default EmailCompletionModal;
