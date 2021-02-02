const Employee = require("./Employee");
const Department = require("./Department");

class Role {
  constructor(id, name) {
    (this.id = id), (this.name = name);
  }
}

module.exports = Role;
