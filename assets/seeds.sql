USE employee_db;

/* Insert 4 Rows into table */
INSERT INTO department (name)
VALUES ("Admin"),
	("Sales"),
    ("Finance"),
    ("Product Services");

/* Insert 7 Rows into table */
INSERT INTO role (title, salary, department_id)
VALUES ("Developer", 78000.00, 4),
    ("Director", 99000.00, 1),
    ("Salesman", 45000.00, 2),
	("Engineer", 90000.00, 4),
    ("Financial Analyst", 56000.00, 3),
    ("Accountant", 66000.00, 3),
    ("Manager", 66000.00, 1);
    
/* Insert 19 Rows into new table */
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Harrison", "Schaen", 2, 1),
    ("Steph", "Huynh", 3, 1),
    ("Steven", "Landgraf", 5, 1),
    ("Daniel", "Angulo", 4, 1),
    ("Said", "Aguilar", 1, 1),
    ("Matthew", "Bell", 3, 1),
    ("Julian", "Acosta", 3, 1),
    ("Tyler", "Arthur", 3, 1),
    ("Javier", "Banuelos", 3, 1),
    ("Art", "Aragon", 3, 2),
    ("Cara", "Bunnell", 5, 2),
    ("Jaycee", "Bagtas", 6, 2),
    ("Alexia", "Chalita", 5, 2),
    ("Lizbeth", "Glasser", 4, 2),
    ("Collin", "Kier", 4, 1),
    ("Brian", "Monteverde", 3, 3),
    ("Greg", "Schuman", 6, 3),
    ("Amy", "Fabella", 5, 3),
    ("Jason", "Riley", 6, 3);

