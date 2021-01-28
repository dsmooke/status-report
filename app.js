const mysql = require("mysql");
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const cTable = require("console.table");

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "employee_db"
});

connection.connect((error) => {
    if (error) throw error;
    console.log("Connected to Database");
    init();
});

// Add Department

// Add Role

// Add Employee

// View Departments

// View Roles

// View Employees

// Update Employee Roles
