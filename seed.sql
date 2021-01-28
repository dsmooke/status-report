DROP DATABASE IF EXISTS employee_db;

CREATE DATABASE IF NOT EXISTS employee_db;

USE employee_db;

CREATE TABLE employee (
    id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    role_id INTEGER default 0,
    manager_id INTEGER default 0,
    PRIMARY KEY(id)
);

