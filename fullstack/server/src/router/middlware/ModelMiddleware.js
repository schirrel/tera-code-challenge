const mung = require("express-mung");
const Model = require("@schirrel/pg-connection/Model");
function transform(body, req, res) {
  if (body instanceof Array) {
    for (let i = 0; i < body.length; i++) {
      if (body[i] instanceof Model) {
        body[i] = body[i].toJSON();
      }
    }
  } else if (body instanceof Model) {
    body = body.toJSON();
  }
  return body;
}

module.exports = mung.json(transform);
