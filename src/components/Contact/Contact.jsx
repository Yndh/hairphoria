import { useState, useEffect } from "react";

import "./Contact.css";

const Contact = () => {
  const [isClicked, setIsClicked] = useState(false);
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
    if(!navigator.clipboard){
      console.error('Clipboard API not found')
      return;
    }

    navigator.clipboard
      .writeText(text)
      .then(() => {
        console.log("Text copied to clipboard");
        setIsClicked(true);
      })
      .catch((err) => {
        console.error("Error copying text to clipboard: ", err);
      });
  };

  return (
    <div className="contact__container" id="contact">
      <div className="contact">
        <p>Kontakt</p>
        <h2>Skontaktuj się z nami</h2>

        <button
          onClick={() => {
            copyToClipboard(contactNumber);
          }}
          className={isClicked ? "copied" : ""}
        >
          <p>{contactNumber}</p>
        </button>
      </div>
    </div>
  );
};
export default Contact;
