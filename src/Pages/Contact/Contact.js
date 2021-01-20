/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div>
      <div className="header-container">
        <h1>CONTACT US!</h1>
        <p>
          (512) 358-4908 &#8226;{" "}
          <a href="mailto: info@soccerhub.com" target="_blank">
            info@soccerhub.com
          </a>
        </p>
        <div className="hours-service">
          <br />
          <h3>Facility Hours:</h3>
          <ul>
            <li>
              <b>
                <span>Monday - Friday</span> 3PM-11PM
              </b>
            </li>
            <li>
              <b>
                <span>Saturday and Sunday</span> 10AM-9PM (Hours may vary by
                season, please call or email for the fastest response.)
              </b>
            </li>
          </ul>
        </div>
      </div>
      <div className="form-header">
        <h2>To contact Soccer Hub, please fill out the below form.</h2>
      </div>
      <div className="form-input">
        <form>
          <div className="form-names">
            <input placeholder="First Name" type="text" />
            <input placeholder="Last Name" type="text" />
          </div>
          <div className="form-email-phone">
            <input className="input-email" placeholder="Email" type="email" />
            <input placeholder="Number" type="phone" />
          </div>
          <div className="form-comments">
            <textarea
              placeholder="Questions and Comments"
              name="comments"
              cols="140"
              rows="10"
            ></textarea>
          </div>
          <div className="submit-btn">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
