import React from "react";
import "../App.css";

const SignUp = () => {
  return (
    <div className="signup-container">
      <h2>
        <img src="https://img.icons8.com/nolan/64/football.png" />
        Sign up to receive our latest updates and information on upcoming
        events!
        {/* <img src="https://img.icons8.com/nolan/64/football.png" /> */}
      </h2>
      <form className="signup-form">
        <input placeholder="Enter Email" type="email" />
        <button>
          <i class="fas fa-angle-double-right"></i>
          Sign Up!
        </button>
      </form>
    </div>
  );
};

export default SignUp;
