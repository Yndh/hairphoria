import "./Contact.css";

const Contact = () => {
  const contactNumber = "+48 754 417 785";

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text)
  }

  return (
    <div className="contact__container" id="contact">
      <div className="contact">
        <p>Kontakt</p>
        <h2>Skontaktuj się z nami</h2>

        <button onClick={() => {copyToClipboard(contactNumber)}}>
          <p>{contactNumber}</p>
        </button>
      </div>
    </div>
  );
};
export default Contact;
