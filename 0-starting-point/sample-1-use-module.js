const jwt = require("jsonwebtoken");

module.exports = function makeToken() {
  const payload = {
    aud: "AUDIENCE_ID",
    iss: "https://example.com/",
    sub: "SUBJECT_ID",
  };

  return jwt.sign(payload, "TOKEN_SECRET", {
    expiresIn: "1 day",
  });
};

