// Dependencies
const mysql = require('mysql');
const inquirer = require('inquirer');
const cTable = require('console.table');

// Create database connections
var connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'root',
  database: 'employee_db'
});

// Check for connection errors
// If no errors, console log successful message
connection.connect(function(err) {
  if (err) throw err;
  console.log('connected as id ' + connection.threadId);
  runSearch();
});

function runSearch() {
  inquirer
    .prompt({
      name: 'choice',
      type: 'rawlist',
      message: 'What would you like to do?',
      choices: [
        'View All Employees',
        'View All Departments',
        'View All Roles',
        'Search Employee By Last Name',
        'Update Employee Role',
        'View Employees By Department',
        'View Employees By Roles',
        'Add New Employee',
        'Add New Department',
        'Add New Role',
        'Quit'
      ]
    })
    .then(function(answer) {
      switch (answer.choice) {
        case 'View All Employees':
         // vAllEmployees();
          break;

        case 'View All Departments':
         // vAllDept();
          break;

        case 'View All Roles':
         // vAllRoles();
          break;

        case 'View Employees By Department':
         // vByDepartment();
          break;

        case 'View Employees By Roles':
         // vByRoles();
          break;

        case 'Add New Employee':
         // addEmp();
          break;

        case 'Add New Department':
         // addDept();
          break;

        case 'Add New Role':
         // addRole();
          break;

        case 'Search Employee By Last Name':
          //searchEmpByLn();
          break;

        case 'Update Employee Role':
          //updateEmpRole();
          break;

        case 'Quit':
          connection.end();
          break;
      }
    });
}

