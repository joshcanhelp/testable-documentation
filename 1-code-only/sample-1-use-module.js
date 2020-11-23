// First, install the `jsonwebtoken` package ([npmjs.com](https://www.npmjs.com/package/jsonwebtoken)):
//
// ```
// $ npm install jsonwebtoken
// ```
//
// Require it at the top of your module:
//
const jwt = require("jsonwebtoken");

// Now, we export a function to do the heavy lifting. 
module.exports = function makeToken() {

  // The session token payload includes claims typical of an OpenID Connect ID token.
  const payload = {
    // The token audience - `aud` - indicates **who is meant to consume the token**.
    aud: "AUDIENCE_ID",
    // The token issuer - `iss` - indicates **who generated the token**.
    iss: `https://example.com/`,
    // The token subject - `sub` - indicates **who the token is meant to represent**.
    sub: "SUBJECT_ID",
  };

  // This function will return a signed JSON Web Token - JWT - using the second 
  // parameter below as the signing key. This token will need that same value to 
  // check the token signature when validated. It will be obvious to some but the 
  // `"TOKEN_SECRET"` value below should be long, random, and never stored in 
  // the code.
  return jwt.sign(payload, "TOKEN_SECRET", {
    // The `jsonwebtoken` library can accept plain English time representations.
    expiresIn: "1 day",
  });
};

// And there you have it, a function that returns a signed token!
