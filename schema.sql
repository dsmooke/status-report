-- Drops the programming_db if it already exists
DROP DATABASE IF EXISTS employee_db;

-- Created the BD "employee_db"
CREATE DATABASE IF NOT EXISTS employee_db;

-- Use the DB "employee_db" for all the rest of the script
USE employee_db;

-- Created the table "employee"
CREATE TABLE employee (
    id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(30) NOT NULL, 
    last_name VARCHAR(50) NOT NULL, 
    role_id INTEGER default 0, 
    manager_id INTEGER default 0, 
    PRIMARY KEY(id)
);

-- Created the table "department"
CREATE TABLE department (
id INT NOT NULL AUTO_INCREMENT,
name VARCHAR(30),
PRIMARY KEY (id)
);

-- Created the table "role"
CREATE TABLE role (
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(30), 
    salary DECIMAL, 
    department_id INT,
    PRIMARY KEY (id)
);


-- show ALL employees
SELECT id, first_name, last_name
FROM employee
INNER JOIN role ON employee.role_id = role.id;

SELECT id, name
FROM department
RIGHT JOIN department ON employee.role_id = role.id;