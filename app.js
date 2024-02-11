const express = require('express');
const app = express();
const PORT = 3000;
const { dbConnection } = require('./config/config');
const routes = require('./routes');

app.use(express.json());

app.use('/', routes);

dbConnection();


// POST /
app.post('/create', (req, res) => {
    
  });
  
  // GET /
  app.get('/', (req, res) => {
   
  });
  
  // GET /id/:_id
  app.get('/id/:_id', (req, res) => {
    
  });
  
  // PUT /markAsCompleted/:_id
  app.put('/markAsCompleted/:_id', (req, res) => {
    
  });
  
  // PUT /id/:_id
  app.put('/id/:_id', (req, res) => {
    
  });
  
  // DELETE /id/:_id
  app.delete('/id/:_id', (req, res) => {
  
  });


app.listen(PORT, () => console.log(`Server started on port ${PORT}`));