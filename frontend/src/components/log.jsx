import React from "react";

import { GoogleLogin } from "react-google-login";
// refresh token
// import { refreshTokenSetup } from "../utils/refreshToken";

const clientId =
  "874191732549-tl72cc8iqf10rvv8pcp5buq4uafv4qpo.apps.googleusercontent.com";

function Log() {
  const onSuccess = (res) => {
    console.log("Login Success: currentUser:", res.profileObj);
  };

  const onFailure = (res) => {
    console.log("Login failed: res:", res);
  };

  return (
    <div>
      <GoogleLogin
        className="login-btn"
        clientId={clientId}
        buttonText="Login with your Google Account"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={"single_host_origin"}
        style={{ marginTop: "100px" }}
        isSignedIn={true}
        data-redirecturi="https://localhost:5173/dashboard"
      />
    </div>
  );
}

export default Log;
