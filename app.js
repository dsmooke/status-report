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
  console.log("Connected to Database");

  // console.log("Viewing employee list \n");
  // viewEmployees();

  // init();
});

// let employeeList = [];

// view Employee function
function viewEmployees() {
  console.log("Viewing employee list...\n");
  connection.query("SELECT * FROM employees", function (err, res) {
    if (err) throw err;
    // Log all results of the SELECT statement
    console.log(res);
    connection.end();
  });
  // viewEmployees();
}

const promptUser = async () => {
  const answers = await inquirer.prompt(questions);
};

const init = async () => {
  try {
    await promptUser();

    // console.log(employeeList);
  } catch (error) {
    console.log(error);
  }
};
init();

connection.end(function (err) {
  // The connection is terminated now
});
