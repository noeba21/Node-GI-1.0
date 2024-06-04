const express = require('express');
const employees = require('./employees.json');
const fs = require('fs') 

const app = express();
const PORT = 3006;

// GET all employees
app.get('/Employees', (req, res) => {
  res.json(employees);
});

// GET employee by ID
app.get('/Employees/:EmployeeID', (req, res) => {
  const EmployeemployeeID = parseInt(req.params.EmployeeID);
  const Employee = employees.find(emp => emp.EmployeeID === EmployeeID);
  //this is the 404 error in case wrong Id is given
  if (!employee) {
    return res.status(404).json({ error: 'Employee not found' });
  }

  res.json(Employee);
});

employees.forEach((employee) => {
const EmployeeID = employee.EmployeeID
app.get(`Employees/${EmployeeID}`, (req, res) => {
  
    res.send(employee);
  });
})





// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});