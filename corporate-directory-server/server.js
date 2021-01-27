const express = require('express');
const morgan = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')

require('./db/mongoose');
const empRoutes = require('./routes/employee')



const app = express();
app.use(bodyParser.urlencoded({ extended: true }))
 
// parse application/json
app.use(bodyParser.json())

app.use(cors())
app.all('/*',(req,res,next)=>{
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Method', 'GET , POST , DELETE');
  next();

})
app.use(morgan('tiny'));

app.use('/api', empRoutes)

const port = process.env.PORT || 4000;
app.get('/', (req, res) => {
  res.json({"message": "Hello World"});
});
app.listen(port, () => {
  console.log(`Node server is listening on port ${port}`);
});