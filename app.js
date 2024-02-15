const express = require('express');
const app = express();
const PORT = 3000;
const { dbConnection } = require('./config/config');
const routes = require('./routes');

app.use(express.json());

app.use('/', routes);

dbConnection();

const Tarea = mongoose.model('Tarea', tareaSchema);





    


app.listen(PORT, () => {
  
  console.log(`Express esta escuchando en el puertohttp://localhost: ${PORT}`)
});