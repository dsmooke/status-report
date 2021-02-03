const mysql = require("mysql");
const inquirer = require("inquirer");

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "password",
  database: "employee_db",
});

connection.connect((error) => {
  if (error) throw error;
  console.log(`Connected to Employee Database \n`);

  // console.log("Viewing employee list. \n");
  // setTimeout(() => {
  //   viewEmployees();
  // }, 1000);

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

  init();
});

module.exports = connection;
