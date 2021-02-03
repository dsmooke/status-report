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
          break;
        case "Add Employee":
          return addEmployee(answer);
          break;
        case "View All Departments":
          // return viewDepartments();
          break;
        case "View All Roles":
          // return viewRoles();
          break;
        case "Add Role":
          // return addRole();
          break;
        case "Update Employee Role":
          return updateRole();
          break;
        case "Remove Employee":
          return deleteEmployee();
          break;
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
    "SELECT * FROM employees LEFT JOIN role ON employees.role_id = role.id",
    function (err, res) {
      if (err) throw err;

      // Log all results of the SELECT statement
      console.table(res);

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
      first_name: "",
      last_name: "",
    },
    function (err, res) {
      if (err) throw err;
      console.log(res.affectedRows + " employee inserted!\n");
      // call updateList AFTER the INSERT completes
      // updateList();
    }
  );
  console.log(query.sql);
}

function updateRole() {
  // console.log("Updating employees...\n");
  var query = connection.query(
    "UPDATE employees SET ? WHERE ?",
    [
      {
        role_id: 8,
      },
      { last_name: "Test" },
    ],
    function (err, res) {
      if (err) throw err;
      console.log(res.affectedRows + " Role updated!\n");
    }
  );
}

function deleteEmployee() {
  console.log("Deleting employee...\n");
  var query = connection.query(
    "DELETE FROM employees WHERE ?",
    {
      first_name: "Hades",
    },
    function (err, res) {
      if (err) throw err;
      console.log(res.affectedRows + " employee deleted!\n");

      // Call viewEmployees AFTER the DELETE completes
      // viewEmployees();
    }
  );
}

// const promptUser = async () => {
//   const answers = await inquirer.prompt(questions);
// };

// const init = async () => {
//   try {
//     await promptUser();

//     // console.log(employeeList);
//   } catch (error) {
//     console.log(error);
//   }
// };
// init();

// connection.end(function (err) {
// The connection is terminated now
// });
