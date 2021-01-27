const mongoose = require('mongoose');
const employeeSchema = mongoose.Schema({
    firstName: {
        type:String,
        required:true
    },
    lastName: {
        type:String,
        required:true
    },
    email: {
        type:String,
        required:true
    },
    phone: {
        type:Number,
        required:true

    }
   }, 
   {
        timestamps: true
    }

);

module.exports = mongoose.model('employee', employeeSchema);

