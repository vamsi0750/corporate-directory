const router = require('express').Router();
const employeeController = require('../Controllers/employeController');

router.get('/get-employees', employeeController.getEmloyess);

router.post('/add-employee', employeeController.addEmployees);


router.delete('/delete-employee/:id', employeeController.deleteEmployee);



module.exports = router





