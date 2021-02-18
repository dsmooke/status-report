const connection = require("./db/EMS_db");
const inquirer = require("inquirer");

const Employee = require("./lib/Employee");
const Department = require("./lib/Department");
const Role = require("./lib/Role");

const questions = require("./lib/questions");
const cTable = require("console.table");

async function init() {
  // console.log("Initializing");

  try {
    let answer = await inquirer.prompt(questions).then(function (answer) {
      // console.log(answer);

      switch (answer.doWhat) {
        case "View All Employees":
          return viewEmployees();

        case "Add Employee":
          return addEmployee(answer);

        // case "View All Departments":
        //   // return viewDepartments();
        //   break;
        // case "View All Roles":
        //   // return viewRoles();
        //   break;
        // case "Add Role":
        //   // return addRole();
        //   break;
        case "Remove Employee":
          return deleteEmployee();
        case "Update Employee Role":
          return updateRole();
        // break;

        // break;
      }
    });
  } catch (error) {
    throw error;
  }
}
init();

// view Employee function
function viewEmployees() {
  // console.log("Viewing (new) employee list...\n");
  connection.query(
    "SELECT first_name, last_name, department.name, role.title, role.salary FROM employees INNER JOIN role ON employees.role_id = role.id INNER JOIN department ON role.department_id = department.id",
    function (err, res) {
      if (err) throw err;

      // Log all results of the SELECT statement
      console.table(res);

      init();
      // connection.end();
    }
  );
}
// viewEmployees();

// add employee function
function addEmployee(answer) {
  // console.log("Adding new employee...\n");
  console.log("Adding employee", answer);
  var query = connection.query(
    "INSERT INTO employees SET ?",
    // INSERT INTO employees VALUES ? ?
    {
      first_name: answer.firstName,
      last_name: answer.lastName,
      role_id: answer.employeeRole,
      manager_id: answer.employeeManager,
    },
    function (err, res) {
      if (err) throw err;
      console.log(res.affectedRows + " employee inserted!\n");
      // call updateList AFTER the INSERT completes
      viewEmployees();
    }
  );
  console.log(query.sql);
  init();
}

// function updateRole() {
//   // console.log("Updating employees...\n");
//   var query = connection.query(
//     "UPDATE employees SET ? WHERE ?",
//     [
//       {
//         role_id: answer.updateRole,
//       },
//       { first_name: answer.firstName },
//     ],
//     function (err, res) {
//       if (err) throw err;
//       console.log(res.affectedRows + " Role updated!\n");
//     }
//   );
//   init();
// }

function deleteEmployee() {
  console.log("Deleting employee...\n");
  var query = connection.query(
    "DELETE FROM employees WHERE ?",
    {
      first_name: answer.removeEmployee,
    },
    function (err, res) {
      if (err) throw err;
      console.log(res.affectedRows + " employee deleted!\n");
      // Call viewEmployees AFTER the DELETE completes
      viewEmployees();
    }
  );

  init();
}

// connection.end(function (err) {
// The connection is terminated now
// });
