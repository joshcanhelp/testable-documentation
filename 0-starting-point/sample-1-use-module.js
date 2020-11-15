const jwt = require("jsonwebtoken");

const payload = {
  aud: "AUDIENCE_ID",
  iss: `https://example.com/`,
  sub: "SUBJECT_ID",
};

jwt.sign(payload, this.tokenSecret, {
  expiresIn: this.tokenExpiresIn,
});
