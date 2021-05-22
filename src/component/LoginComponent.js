import React, { Component } from "react";
import GoogleLogin from "react-google-login";

export class LoginComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email_id: "",
      google_id: "",
      image_url: "",
    };
  }

  responseGoogle = (response) => {
    this.setState({
      name: response.profileObj.name,
      email_id: response.profileObj.email,
      google_id: response.profileObj.googleId,
      image_url: response.profileObj.imageUrl,
    });
    // console.log(response);
    // console.log(response.profileObj);
  };

  render() {
    const client_id = process.env.REACT_APP_CLIENT_ID;
    // const [name, email_id, google_id, image_url] = this.state;
    // console.log(client_id);
    return (
      <div>
        <GoogleLogin
          clientId={client_id}
          buttonText="Login"
          onSuccess={this.responseGoogle}
          onFailure={this.responseGoogle}
          cookiePolicy={"single_host_origin"}
        />
        <h1>{this.state.name}</h1>
        <h2>{this.state.email_id}</h2>
        <h2>{this.state.google_id}</h2>
        <img src={this.state.image_url} alt="profile Image"></img>
      </div>
    );
  }
}

export default LoginComponent;
