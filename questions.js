const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const questions = [
    {
        name: "doWhat",
        type: "list",
        message: "What would you like to do?",
        choices: [
            "View All Employees",
            "View All Employees By Department",
            "View All Employees By Manager",
            "Add Employee",
            "Remove Employee",
            "View All Roles",
            "Add Role",
            "Remove Role",
            "Update Employee Role",
            "Update Employee Manager"
        ]

    },

    {
        name: "firstName",
        type: "input",
        message: "What is the employee's first name?",
    },
    {
        name: "lastName",
        type: "input",
        message: "What is the employee's last name?",
    },
    {
        name: "employeeRole",
        type: "list",
        message: "What is the employee's role?",
        choices: []
    },
    {
        name: "removeEmployee",
        type: "list",
        message: "Which Employees do you want to remove?",
        choices: []
    },

    {
        name: "updateManager",
        type: "list",
        message: "Which Employee's Manager do you want to update?",
        choices: []
    },

    {
        name: "removeRole",
        type: "list",
        message: "What role would you like to remove?",
        choices: []
    },
];