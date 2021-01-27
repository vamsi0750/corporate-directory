const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://vamsi07500:vamsi0750@cluster0.vhfx0.gcp.mongodb.net/corporate-directory?retryWrites=true&w=majority',
{ useNewUrlParser: true, useUnifiedTopology: true })
.then(()=>{
        console.log("db connected");
    })
.catch(error=>{
        console.log(error);
    });
