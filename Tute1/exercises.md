Exercise 1 - Calculating Module Marks
Description: Create an HTML form that collects marks for Coursework 1 and Coursework 2. Write a Node.js server using Express to handle the form submission, calculate the overall module mark using the formula, and display the result.
Node.js Exercise:

Create an HTML form that allows students to enter their marks for Coursework 1 and Coursework 2.
Create an Express app with a route to handle a POST request for the form submission.
The server should calculate the overall mark using the formula:
scss
Copy
Overall Mark = (CW1 * 0.4) + (CW2 * 0.6)
Send the calculated result back to the client.
Exercise 2 - Filtering Students by Marks
Description: Create an HTML form that asks the user to enter a mark. Write a Node.js program with Express that takes the input from the form, filters an array of predefined students' marks, and displays all students who scored the entered mark or higher.
Node.js Exercise:

Define an array of student data in your server code, e.g.:
javascript
Copy
const students = [
    { name: 'Samwise Gamgee', mark: 88 },
    { name: 'Frodo Baggins', mark: 56 },
    { name: 'Elrond Half-Elven', mark: 92 },
    { name: 'Gandalf Mithrandir', mark: 35 },
    { name: 'Merry Brandybuck', mark: 41 },
    { name: 'Pippin Took', mark: 25 },
    { name: 'Legolas Greenleaf', mark: 67 },
];
Create an HTML form where the user can enter a minimum mark.
Create a route in your Express app to handle the POST request from the form.
Filter the student data based on the entered mark and send a response back to the user listing the filtered students.
Exercise 3 - Querying a Database of Books
Description: Create a web application that interacts with a MySQL database to display books based on search criteria (e.g., title, author, or year of publication).
Node.js Exercise:

Database Setup:

Use phpMyAdmin or MySQL Workbench to create a table books with columns: title, author, year, and price.
Insert sample data into the books table.
Server Setup:

Use the mysql2 or sequelize library in Node.js to connect to the database.
Create an HTML form that allows the user to enter search criteria (e.g., title, author, or year).
Create an Express app with a route to handle the POST request from the form.
Retrieve the search criteria from the form, query the database using SQL, and return the results as an HTML page.
Optional Challenge:

Use a single route to display both the form and the search results. If no form data is submitted, render the form; otherwise, display the matching books.
Notes for Running Node.js Exercises:
Install required dependencies: express, body-parser, and optionally mysql2 or sequelize.
bash
Copy
npm install express body-parser mysql2
Run the app locally using:
bash
Copy
node app.js
Host the app on a platform like Render, Railway, or any other Node.js hosting service to simulate deploying it on a university server.
This setup replicates the functionality of the PHP exercises using Node.js and Express, giving you a modern approach to building web applications.