// First, install the `jsonwebtoken` package ([npmjs.com](https://www.npmjs.com/package/jsonwebtoken)):
//
// ```
// $ npm install jsonwebtoken
// ```
//
// Require it at the top of your module:
//
const jwt = require("jsonwebtoken");

// The session token payload includes claims typical of an OpenID Connect ID token.
const payload = {
  aud: "AUDIENCE_ID",
  iss: `https://example.com/`,
  sub: "SUBJECT_ID",
};

jwt.sign(payload, this.tokenSecret, {
  expiresIn: this.tokenExpiresIn,
});
