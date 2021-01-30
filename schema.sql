-- Drops the programming_db if it already exists
DROP DATABASE IF EXISTS employee_db;

-- Created the BD "employee_db"
CREATE DATABASE IF NOT EXISTS employee_db;

-- Use the DB "employee_db" for all the rest of the script
USE employee_db;

-- Created the table "department"
CREATE TABLE department (
id INT PRIMARY KEY,
name VARCHAR(30) -- to hold departmentname
);

-- Created the table "employee"
CREATE TABLE employee (
    id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(30) NOT NULL, -- to hold employee first name
    last_name VARCHAR(50) NOT NULL, -- to hold employee last name
    role_id INTEGER default 0, --  to hold reference to role employee has
    manager_id INTEGER default 0, -- to hold reference to another employee that manages the employee being created. This field may be null if the employee has no manager
    PRIMARY KEY(id)
);

-- Created the table "role"
CREATE TABLE role ( -- role
    id INT PRIMARY KEY,
    title VARCHAR(30), --  to hold role title
    salary DECIMAL, -- to hold role salary
    department_id INT -- to hold reference to department role belongs to
);

-- Inserted a set of records into the table
INSERT INTO employee (id, first_name, last_name, role_id, salary, manager_id)
VALUES (1, "Zeus", "Jupiter", "Lightning Director", 1000, 1);

INSERT INTO department (id, name)
VALUES (1, "Heavens");

INSERT INTO role (id, title, salary, department_id)
VALUES (1, "Lightning Director", 911000, "Heavens");