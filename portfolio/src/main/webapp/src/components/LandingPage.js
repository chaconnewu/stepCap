import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Navbar from "./Navbar";
import RegisterForm from "./RegisterForm";

export default class LandingPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div class="landing-main-container">
        <Navbar />
        <div class="landing-body-container">
          <RegisterForm />
        </div>
      </div>
    );
  }
}
