import { useState, useEffect } from "react";

import "./Contact.css";

const Contact = () => {
  const [isClicked, setIsClicked] = useState(false)
  const contactNumber = "+48 754 417 785";

  useEffect(() => {
    let timerId;

    if (isClicked) {
      timerId = setTimeout(() => {
        setIsClicked(false);
      }, 2000);
    }

    return () => {
      clearTimeout(timerId);
    };
  }, [isClicked]);

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text)
    setIsClicked(true)
  }

  return (
    <div className="contact__container" id="contact">
      <div className="contact">
        <p>Kontakt</p>
        <h2>Skontaktuj się z nami</h2>

        <button onClick={() => {copyToClipboard(contactNumber)}} className={isClicked ? 'copied' : ''}>
          <p>{contactNumber}</p>
        </button>
      </div>
    </div>
  );
};
export default Contact;
