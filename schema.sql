-- Drops the programming_db if it already exists
DROP DATABASE IF EXISTS employee_db;

-- Created the BD "employee_db"
CREATE DATABASE employee_db;

-- Use the DB "employee_db" for all the rest of the script
USE employee_db;

-- Created the table "employee"
CREATE TABLE employees (
    id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(30) NOT NULL, 
    last_name VARCHAR(50) NOT NULL, 
    role_id INTEGER default 0, 
    manager_id INTEGER default 0,
    PRIMARY KEY(id)
    FOREIGN KEY (role_id) REFERENCES role(id)
    FOREIGN KEY (manager_id) REFERENCES employee(id)

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
    FOREIGN KEY (department_id) REFERENCES department(id)
);

-- Inserted a set of records into the employee table
INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES  ( "Zeus", "Jupiter", 1, 1),
        ( "Posiedon", "Neptune", 2, 1),
        ( "Hades", "Pluto", 3, 1),
        ( "Aphrodite", "Venus", 4, 2),
        ( "Artemis", "Diana", 5, 2),
        ( "Ares", "Mars", 6, 2),
        ( "Athena", "Minerva", 7, 2),
        ( "Hermes", "Mercury", 8, 2),
        ( "Hera", "Juno", 9, 1);

-- Inserted a set of records into the department table
INSERT INTO department (id, name)
VALUES  ( "Heavens"), 
        ("Sea"),
        ( "Underworld"),
        ("Love"),
        ( "Moon"),
        ("War"),
        ("Wisdom"),
        ("Messages"),
        ( "Marriage");

-- Inserted a set of records into the role table 
INSERT INTO role (id, title, salary, department_id)
VALUES  ("Head Electrician", 10000, 1),
        ( "Submarine Technician", 15000, 2),
        ( "Funeral Director", 20000, 3),
        ( "Matchmaker", 25000, 4),
        ("Nasa Engineer", 30000, 5),
        ( "Defense Secretary", 35000, 6),
        ("Advice Columnist", 40000, 7),
        ( "Communications Director", 45000, 8),
        ( "Marriage Counselor", 50000, 9);


SELECT * FROM employees;



-- Show ALL employees
-- SELECT id, first_name, last_name, 
-- FROM employees
-- INNER JOIN role 
-- ON employees.role_id = role.title;

-- Show employees with specific job
-- SELECT first_name, last_name 
-- FROM employees
-- INNER JOIN role 
-- ON employees.role_id = role.title

-- View department
-- SELECT name
-- FROM department 

-- View managers
-- SELECT manager_id
-- FROM employees
-- INNER JOIN department
-- ON employees.manager_id = department.name