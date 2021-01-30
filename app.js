const mysql = require("mysql");
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const questions = require("./questions"); // access with dot notation
console.log(questions.find((item) => item.name === "firstName"));

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "password",
  database: "employee_db",
});

const ADD = "ADD",
  VIEW = "VIEW",
  UPDATE = "UPDATE",
  REMOVE = "REMOVE";

connection.connect((error) => {
  if (error) throw error;
  console.log("Connected to Database");
  init();
});

const cTable = require("console.table");

console.table([
  {
    id: 1,
    first_name: "Alex",
    last_name: "Smith",
    title: "Software Engineer",
    department: "Engineering",
    manager: "Bob Ross",
  },
]);
console.log(table);

// async function init() {
//   console.log("Initializing");
// }

// async function add() {}
// // Add Department

// // Add Role

// // Add Employee

// async function view() {}
// // View Departments

// // View Roles

// // View Employees

// async function update() {}
// // Update Employee Roles

// // Remove Role
// // Remove Employee

connection.end(function (err) {
  // The connection is terminated now
});
