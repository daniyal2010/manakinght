const db = require("../models");

module.exports = function (p, h, count) {
  this._p = p;
  this._h = h;
  this._count = count;

  this.endpoint = "api/admin/configurations";
  this.form_fields = {
    p: "",
    h: "",
    count: "",
  };

  return this;
};
