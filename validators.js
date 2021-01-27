module.exports.validateUsername = (username) => {
  if (typeof username !== "string") {
    return false;
  }
  if (username.length < 5) {
    return false;
  }

  return true;
};

module.exports.validateEmail = (email) => {
  if (typeof email !== "string") {
    return false;
  }
  if (!email.includes("@")) {
    return false;
  }

  return true;
};

module.exports.validatePassword = (password) => {
  if (typeof password !== "string") {
    return false;
  }
  if (password.length < 5) {
    return false;
  }

  return true;
};
