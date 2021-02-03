const Department = require("./Department");
const Role = require("./Role");

class Employee {
  constructor(id, first_name, last_name, role_id, manager_id) {
    this.id = id;
    this.first_name = first_name;
    this.last_name = last_name;
    this.role_id = role_id;
    this.manager_id = manager_id;
  }
}

/*** CRUD Functions ***/

// Create/Add Employee

// Read/View Employees
function viewEmployees() {
  this.connection.query(
    "SELECT employees.id, employees.first_name, employees.last_name, role.title, department.name, role.salary, employee.manager_id" +
      "FROM employees" +
      "LEFT JOIN role ON employee.role_id = role.title" +
      "LEFT JOIN department ON department.name = role.department_id",
    function (err, res) {
      if (err) console.log(err);
      //Print employee list
      console.log("\n");
      console.table(res);
    }
  );
}

// Update Employee role

// Delete Employee
module.exports = Employee;
