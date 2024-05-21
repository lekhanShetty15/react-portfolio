import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm('service_cepensz', 'template_qc81jl7', form.current, {
        publicKey: 'NGGxSwwMlMWX_bPGQ',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          form.current.reset();
          setLoading(false);
          setShowSuccess(true);
          setTimeout(() => setShowSuccess(false), 3000); // Hide the message after 3 seconds
        },
        (error) => {
          console.log('FAILED...', error.text);
          setLoading(false);
        }
      );
  };

  return (
    <div className="contact-main">
      <div className="titleContact">//contact_me</div>
      <div className="conatctDesc">I’m looking forward to connecting with you. Don’t hesitate to reach out to me for a meeting today.</div>
      <div className="email">
        <div className="emailLogo"><i className="fa-regular fa-envelope emailLog"></i></div>
        <div className="emailText">lekhanshetty2000@gmail.com</div>
      </div>
      <div className="email">
        <div className="emailLogo"><i className="fa-solid fa-phone emailLog"></i></div>
        <div className="emailText">+91 9561573723</div>
      </div>

      <form ref={form} onSubmit={sendEmail}>
        <input className="nameInpt" name="user_name" type="text" placeholder="_name" />
        <input className="emailInpt" name="user_email" type="email" placeholder="_email" />
        <textarea className="textdesc" placeholder="_message" name="message"></textarea>
        <button className="submitBtnlast" type="submit" disabled={loading}>
          {loading ? (
            <>
              Sending...
              <span className="loader"></span>
            </>
          ) : (
            'submit-message'
          )}
        </button>
      </form>

      {showSuccess && (
        <div className="success-popup">
          Message sent successfully!
        </div>
      )}
    </div>
  );
};

export default Contact;
