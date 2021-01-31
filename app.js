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

// function addEmployee() {
//   if (questions.doWhat === "Add Employee") {

//     const employee = new Employee(questions.firstName, questions.lastName, questions.employeeRole, questions.salary, questions.employeeDept, questions.employeeManager)
//     employeeList.push(employee);

//     } 
// };
// addEmployee();


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
