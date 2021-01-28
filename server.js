const mysql = require("mysql");
const inquirer = require("inquirer");

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "greatBay_db"
});

connection.connect((error) => {
    if (error) throw error;
    console.log("Connected to Database");
    init();
});