class CustomNotAuthorizedError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = 403;
    this.name = "NotAuthorizedError";
  }
}

module.exports = CustomNotAuthorizedError;
