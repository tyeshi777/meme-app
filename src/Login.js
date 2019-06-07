import React from "react";
import axios from "axios";

class Login extends React.Component {
  constructor() {
    super();
  }
  login = e => {
    e.preventDefault();
    axios
      .get("https://labs13-localchat.herokuapp.com/google/redirect")
      .then(res => {
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  };
  render() {
    return (
      <div>
        <button onSubmit={this.login}>Login</button>
      </div>
    );
  }
}
