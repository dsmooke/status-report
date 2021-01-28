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
];