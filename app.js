const mysql = require("mysql");
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const questions = require("./questions"); // access with dot notation
// console.log(questions.find((item) => item.name === "firstName"));

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
    // init();
});

// Add Employee []
// Add Department []
// Add Roles []

// Filter by Role Function
function filterRole(role) {
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

// Filter by Department Function

// Filter by Employee Function async function view() {}

// Update Employee Role Function async function update() {}

const cTable = require("console.table");

console.table("Employees", [employees]);


var employees = [
  [1, "Zeus", "Jupiter", "Lightning Director", "Heavens", 1000, "Cronus Titan"],

  [2, "Poseiden", "Neptune", "Sea Director", "Sea", 2000, "Cronus Titan"],
  
  [3, "Hades", "Pluto", "Underworld Director", "Underworld", 3000, "Cronus Titan"],
];

console.table(
  ["id", "first_name", "last_name", "title", "department", "salary", "manager"], employees);

// console.log(table);

// async function init() {
//   console.log("Initializing");
// }

connection.end(function (err) {
  // The connection is terminated now
});
