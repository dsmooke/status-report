const mysql = require("mysql");
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const questions = require("./questions");
// console.log(questions.find((item) => item.name === "firstName")); // access questions

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "password",
  database: "employee_db",
});

connection.connect((error) => {
  if (error) throw error;
  console.log("Connected to Database \n");

  // console.log("Viewing employee list. \n");
  // setTimeout(() => {
  //   viewEmployees();
  // }, 1000);
  // viewEmployees();

  // console.log("Adding new employee. \n");
  // setTimeout(() => {
  //   addEmployee();
  // }, 1000);

  // console.log("Viewing employee list. \n");
  // setTimeout(() => {
  //   viewEmployees();
  // }, 1000);

  // console.log("Updating employee's role. \n");
  // setTimeout(() => {
  //   updateRole();
  // }, 1000);

  // console.log("Viewing employee list. \n");
  // setTimeout(() => {
  //   viewEmployees();
  // }, 1000);

  // console.log("Deleting employee.\n");
  // setTimeout(() => {
  //   deleteEmployee();
  // }, 1000);

  // // console.log("Viewing employee list. \n");
  // setTimeout(() => {
  //   viewEmployees();
  // }, 1000);

  // init();
});

// let employeeList = [];

// view Employee function
function viewEmployees() {
  // console.log("Viewing (new) employee list...\n");
  connection.query("SELECT * FROM employees", function (err, res) {
    if (err) throw err;
    // Log all results of the SELECT statement
    console.log(res);
    // connection.end();
  });
  // viewEmployees();
}

// add employee function
function addEmployee() {
  // console.log("Adding new employee...\n");
  var query = connection.query(
    "INSERT INTO employees SET ?",
    {
      id: 4,
      first_name: "Aphrodite",
      last_name: "Venus",
      role_id: 4,
      manager_id: 1,
    },
    function (err, res) {
      if (err) throw err;
      console.log(res.affectedRows + " employee inserted!\n");
      // call updateList AFTER the INSERT completes
      updateList();
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
      { last_name: "Jupiter" },
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
      viewEmployees();
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
