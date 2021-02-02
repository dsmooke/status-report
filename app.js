const connection = require("./db/EMS_db");

const questions = require("./lib/questions");
// console.log(questions.find((item) => item.name === "firstName")); // access questions

// let employeeList = [];

// view Employee function
function viewEmployees() {
  // console.log("Viewing (new) employee list...\n");
  connection.query("SELECT * FROM employees", function (err, res) {
    if (err) throw err;
    // Log all results of the SELECT statement
    console.log(res);
    // connection.end();
  });
  // viewEmployees();
}

// add employee function
function addEmployee() {
  // console.log("Adding new employee...\n");
  var query = connection.query(
    "INSERT INTO employees SET ?",
    {
      id: 4,
      first_name: "Aphrodite",
      last_name: "Venus",
      role_id: 4,
      manager_id: 1,
    },
    function (err, res) {
      if (err) throw err;
      console.log(res.affectedRows + " employee inserted!\n");
      // call updateList AFTER the INSERT completes
      updateList();
    }
  );
  console.log(query.sql);
}

function updateRole() {
  // console.log("Updating employees...\n");
  var query = connection.query(
    "UPDATE employees SET ? WHERE ?",
    [
      {
        role_id: 8,
      },
      { last_name: "Jupiter" },
    ],
    function (err, res) {
      if (err) throw err;
      console.log(res.affectedRows + " Role updated!\n");
    }
  );
}

function deleteEmployee() {
  console.log("Deleting employee...\n");
  var query = connection.query(
    "DELETE FROM employees WHERE ?",
    {
      first_name: "Hades",
    },
    function (err, res) {
      if (err) throw err;
      console.log(res.affectedRows + " employee deleted!\n");

      // Call viewEmployees AFTER the DELETE completes
      viewEmployees();
    }
  );
}

// const promptUser = async () => {
//   const answers = await inquirer.prompt(questions);
// };

// const init = async () => {
//   try {
//     await promptUser();

//     // console.log(employeeList);
//   } catch (error) {
//     console.log(error);
//   }
// };
// init();

// connection.end(function (err) {
// The connection is terminated now
// });
