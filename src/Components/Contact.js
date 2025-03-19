import axios from "axios";
import React, { useState } from "react";

const Contact = () => {

  const [email, setEmail] = useState('');

  function datapost() {
    axios.post("http://localhost:5000/posting", { email })
      .then(() => {
        alert("data has been posted")
        setEmail('')
      })
      .catch(() => {
        alert("data has not be posted")
      })
  }
  return (
    <div className="contact-page-wrapper">
      <h1 className="primary-heading">Have Question In Mind?</h1>
      <h1 className="primary-heading">Let Us Help You</h1>
      <div className="contact-form-container">
        <input
          type="text"
          placeholder="yourmail@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button className="secondary-button" onClick={datapost}>Submit</button>
      </div>
    </div>
  );
};

export default Contact;