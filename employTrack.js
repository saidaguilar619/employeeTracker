// Dependencies
const mysql = require('mysql');
const inquirer = require('inquirer');

// Create database connections
var connection = mysql.createConnection({
  host: 'localhost',

  // Port
  port: 3306,

  // Username
  user: 'root',

  // Password
  password: 'fav3lapresa',
  database: 'employee_db'
});

connection.connect(function (err) {
  if (err) throw err;
  console.log('connected as id ' + connection.threadId);
  start();
});

function start() {
  inquirer
    .prompt({
      name: 'choice',
      type: 'rawlist',
      message: 'What would you like to do?',
      choices: [
        'Add New Department',
        'Add New Role',
        'Add New Employee',
        'View All Departments',
        'View All Roles',
        'View All Employees',
        'Update Employee Role',
        'Quit'
      ]
    })
    .then(function (answer) {
      switch (answer.choice) {
        case 'Add New Employee':
          addEmployee();
          break;

        case 'Add New Department':
          addDepartment();
          break;

        case 'Add New Role':
          addRole();
          break;

        case 'View All Employees':
          viewEmployees();
          break;

        case 'View All Departments':
          viewDepartments();
          break;

        case 'View All Roles':
          viewRoles();
          break;

        case 'Update Employee Role':
          updateEmployee();
          break;

        case 'Quit':
          connection.end();
          break;
      }
    });
}

function addDepartment() {
  inquirer
    .prompt([{
      name: 'name',
      type: 'input',
      message: 'What is the new department name?'
    }])
    .then(function (answer) {
      connection.query(
        'INSERT INTO department SET ?', {
          name: answer.name
        },
        function (err) {
          if (err) throw err;
          console.log('New department has been added \n');
          viewDepartments();
        }
      );
    });
}

function addRole() {
  inquirer
    .prompt([{
        name: 'role',
        type: 'input',
        message: 'What is the new role?'
      },
      {
        name: 'salary',
        type: 'input',
        message: 'What is the salary?',
        validate: function (value) {
          if (isNaN(value) === false) {
            return true;
          }
          return false;
        }
      },
      {
        name: 'departmentId',
        type: 'input',
        message: 'What is the Department Id?',
        validate: function (value) {
          if (isNaN(value) === false) {
            return true;
          }
          return false;
        }
      }
    ])
    .then(function (answer) {
      connection.query(
        'INSERT INTO role SET ?', {
          title: answer.role,
          salary: answer.salary,
          department_id: answer.departmentId
        },
        function (err) {
          if (err) throw err;
          console.log('The new role has been added \n');
          viewRoles();
        }
      );
    });
}

function addEmployee() {
  inquirer
    .prompt([{
        name: 'fName',
        type: 'input',
        message: 'Enter first name:'
      },
      {
        name: 'lName',
        type: 'input',
        message: 'Enter last name:'
      },
      {
        name: 'roleId',
        type: 'input',
        message: 'Enter the role Id:',
        validate: function (value) {
          if (isNaN(value) === false) {
            return true;
          }
          return false;
        }
      },
      {
        name: 'managerId',
        type: 'input',
        message: 'Enter the manager Id',
        validate: function (value) {
          if (isNaN(value) === false) {
            return true;
          }
          return false;
        }
      }
    ])
    .then(function (answer) {
      connection.query(
        'INSERT INTO employee SET ?', {
          first_name: answer.fName,
          last_name: answer.lName,
          role_id: answer.roleId,
          manager_id: answer.managerId
        },
        function (err) {
          if (err) throw err;
          console.log('The new Employee has been added \n');
          viewEmployees();
        }
      );
    });
}

function viewEmployees() {
  var query = 'SELECT * FROM employee';
  connection.query(query, function (err, res) {
    if (err) throw err;
    console.table(res);
    start();
  });
}

function viewDepartments() {
  var query = 'SELECT * FROM department';
  connection.query(query, function (err, res) {
    if (err) throw err;
    console.table(res);
    start();
  });
}

function viewRoles() {
  var query = 'SELECT * FROM role';
  connection.query(query, function (err, res) {
    if (err) throw err;
    console.table(res);
    start();
  });
}


function updateEmployee() {
  inquirer
    .prompt([{
        name: 'employee',
        type: 'input',
        message: 'Enter Employee Last Name'
      },
      {
        name: 'role',
        type: 'input',
        message: 'Enter new Employee RoleID'
      }
    ])
    .then(function (answer) {
      var query = ' UPDATE employee SET ? WHERE ? ';
      connection.query(
        query,
        [{
          role_id: answer.role
        }, {
          last_name: answer.employee
        }],
        function (err, res) {
          if (err) throw err;
          console.table(res.affectedRows + ' employee updated\n');
          viewRoles();
        }
      );
    });
}