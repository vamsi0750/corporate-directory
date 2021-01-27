const empModel  = require('../models/employe.model');

//get Employee details
exports.getEmloyess = (req, res) => {
    empModel.find()
      .then(emp => {
      res.send(emp);
    }).catch(err => {
      res.status(500).send(err);
    });
    };

 // add Employees

exports.addEmployees  = async (req, res) => {

    if(!req.body) {
      return res.status(400).send({
      message: "Please fill all required field"
    });
    }

    const employee = new empModel({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      phone: req.body.phone
    });
    console.log(employee)

   await employee.save()
      .then(data => {
      res.send(data);
    }).catch(err => {
      res.status(500).send({
      message: err.message || "Something went wrong while creating new employee."
    });
    });
    };




    //delete employee

    exports.deleteEmployee = (req, res) => {
        empModel.findByIdAndRemove(req.params.id)
        .then(emp => {
        if(!emp) {
          return res.status(404).send({
          message: "employee not found with id " + req.params.id
        });
        }
        res.send({message: "employee deleted successfully!"});
        }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
          return res.status(404).send({
          message: "employee not found with id " + req.params.id
        });
        }
        return res.status(500).send({
          message: "Could not delete employee with id " + req.params.id
        });
        });
        };    
