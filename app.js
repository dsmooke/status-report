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

function viewRole(role) {
  const data = {
    employeeList: [],
  };

  for (let i = 0; i < employeeList.length; i++) {
    const employees = employees[i];

    if (employees.role === role) {
      data.employeeList.push(employees);
    }
  }
  return data;
}

const cTable = require("console.table");


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
