module.exports = [
  // What would you like to do?
  {
    name: "doWhat",
    type: "list",
    message: "What would you like to do?",
    choices: [
      "View All Employees",
      "View All Departments",
      // "View All Employees By Manager",
      "Add Employee",
      // "Remove Employee",
      "View All Roles",
      "Add Role",
      // "Remove Role",
      "Update Employee Role",
      // "Update Employee Manager",
    ],
  },

  // What is the employee's first name?
  {
    name: "firstName",
    type: "input",
    message: "What is the employee's first name?",
    when: (questions) => questions.doWhat === "Add Employee",
  },

  // What is the employee's last name?
  {
    name: "lastName",
    type: "input",
    message: "What is the employee's last name?",
    when: (questions) => questions.firstName,
  },

  // What is the employee's role?
  {
    name: "employeeRole",
    type: "list",
    message: "What is the employee's role?",
    choices: [
      "Software Engineer",
      "Designer",
      "Developer",
      "Salesperson",
      "Accountant",
    ],
    when: (questions) => questions.lastName,
  },

  // What is the employee's salary?
  {
    name: "salary",
    type: "input",
    message: "What is the employee's salary?",
    when: (questions) => questions.employeeRole,
  },

  // What is the employee's department?
  {
    name: "employeeDept",
    type: "list",
    message: "What is the employee's department?",
    choices: ["Engineering", "Development", "Finance", "Legal", "Sales"],
    when: (questions) => questions.salary,
  },

  // Who is the employee's manager?
  {
    name: "employeeManager",
    type: "list",
    message: "Who is the employee's manager?",
    choices: ["Adam", "Bill", "Colin", "David"],
    when: (questions) => questions.employeeDept,
  },

  // Which employee's roles do you want to update?
  {
    name: "updateRole",
    type: "list",
    message: "What is the employee's new role?",
    choices: [
      "Software Engineer",
      "Designer",
      "Developer",
      "Salesperson",
      "Accountant",
    ],
    when: (questions) => questions.doWhat === "Update Employee Role",
  },
];

//   // View employees by manager (Bonus)
//   {
//     name: "managerName",
//     type: "list",
//     message: "Who is the employee's manager?",
//     choices: [], // names of managers
//   },

//   // Update employees by manager (Bonus)
//   {
//     name: "updateManager",
//     type: "list",
//     message: "Which employee's manager do you want to update?",
//     choices: [], // employee names
//   },

//   // Delete departments (Bonus)
//   {
//     name: "removeDept",
//     type: "list",
//     message: "What department would you like to remove?",
//     choices: [], // names of departments
//   },

//   // Delete roles (Bonus)
//   {
//     name: "removeRole",
//     type: "list",
//     message: "What role would you like to remove?",
//     choices: [], // names of roles
//   },

//   // Delete employees? (Bonus)
//   {
//     name: "removeEmployee",
//     type: "list",
//     message: "Which employees do you want to remove?",
//     choices: [], // names of employees
//   },
// ];
