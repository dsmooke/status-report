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

const ADD = "ADD", VIEW = "VIEW", UPDATE = "UPDATE", REMOVE = "REMOVE";

connection.connect((error) => {
    if (error) throw error;
    console.log("Connected to Database");
    init();
});

async function init() {
    console.log("Initializing");
}

async function add() { };
// Add Department

// Add Role

// Add Employee

async function view() {

};
// View Departments

// View Roles

// View Employees

async function update() { };
// Update Employee Roles

// Remove Role
// Remove Employee

connection.end(function (err) {
    // The connection is terminated now
});