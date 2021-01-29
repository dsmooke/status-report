DROP DATABASE IF EXISTS employee_db;

CREATE DATABASE IF NOT EXISTS employee_db;

USE employee_db;

CREATE TABLE department (
id INT PRIMARY KEY,
name VARCHAR(30) -- to hold departmentname
);

CREATE TABLE employee (
    id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(30) NOT NULL, -- to hold employee first name
    last_name VARCHAR(50) NOT NULL, -- to hold employee last name
    role_id INTEGER default 0, --  to hold reference to role employee has
    manager_id INTEGER default 0, -- to hold reference to another employee that manages the employee being created. This field may be null if the employee has no manager
    PRIMARY KEY(id)
);

CREATE TABLE role ( -- role
    id INT PRIMARY KEY,
    title VARCHAR(30), --  to hold role title
    salary DECIMAL, -- to hold role salary
    department_id INT -- to hold reference to department role belongs to
);

