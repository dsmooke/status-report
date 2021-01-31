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
    // init();
});

let employeeList = [];

const promptUser = async () => {
  const answers = await inquirer.prompt(questions)

  // const newEmployee = (questions.firstName, questions.lastName, questions.employeeRole, questions.salary, questions.employeeDept, questions.employeeManager)
};

function addEmployee() {
  if (questions.doWhat === "Add Employee") {

    const employee = new Employee(questions.firstName, questions.lastName, questions.employeeRole, questions.salary, questions.employeeDept, questions.employeeManager)
    employeeList.push(employee);

    } 
};
addEmployee();


// const cTable = require("console.table");

// console.table("Employees", [employees]);


// var employees = [
//   [1, "Zeus", "Jupiter", "Lightning Director", "Heavens", 1000, "Cronus Titan"],

//   [2, "Poseiden", "Neptune", "Sea Director", "Sea", 2000, "Cronus Titan"],
  
//   [3, "Hades", "Pluto", "Underworld Director", "Underworld", 3000, "Cronus Titan"],
// ];

// console.table(
//   ["id", "first_name", "last_name", "title", "department", "salary", "manager"], employees);

// console.log(table);

// async function init() {
//   console.log("Initializing");
// }

const init = async () => {
  try{
    await promptUser();

    console.log(employeeList);

  } catch (error) {
    console.log(error);
  }
};
init();

connection.end(function (err) {
  // The connection is terminated now
});
