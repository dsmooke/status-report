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
    manager_id INTEGER default 0, -- VARCHAR(30) NOT NULL?
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

-- Inserted a set of records into the employee table
INSERT INTO employees (id, first_name, last_name, role_id, manager_id)
VALUES  (1, "Zeus", "Jupiter", 1, 1),
        (2, "Posiedon", "Neptune", 2, 1),
        (3, "Hades", "Pluto", 3, 1),
        (4, "Aphrodite", "Venus", 4, 2),
        (5, "Artemis", "Diana", 5, 2),
        (6, "Ares", "Mars", 6, 2),
        (7, "Athena", "Minerva", 7, 2),
        (8, "Hermes", "Mercury", 8, 2)
        (9, "Hera", "Juno", 9, 1)

-- Inserted a set of records into the department table
INSERT INTO department (id, name)
VALUES  (1, "Heavens"),
        (2, "Sea"),
        (3, "Underworld"),
        (4, "Love"),
        (5, "Moon"),
        (6, "War"),
        (7, "Wisdom"),
        (8, "Communications"),
        (9, "Marriage")

-- Inserted a set of records into the role table 
INSERT INTO role (id, title, salary, department_id)
VALUES (1, "Lightning Director", 911000, "1");

INSERT INTO role (id, title, salary, department_id)
VALUES (2, "Sea Director", 15000, "2");

INSERT INTO role (id, title, salary, department_id)
VALUES (3, "Underworld Director", 666000, "3");




SELECT * FROM employees;



-- Show ALL employees
-- SELECT id, first_name, last_name, 
-- FROM employees
-- INNER JOIN role 
-- ON employees.role_id = role.title;

-- Show employees with specific job
SELECT first_name, last_name 
FROM employees
INNER JOIN role 
ON employees.role_id = role.title

-- View department
-- SELECT name
-- FROM department 

-- View managers
-- SELECT manager_id
-- FROM employees
-- WHERE 