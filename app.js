const express = require('express');
const app = express();
const PORT = 3000;
const { dbConnection } = require('./config/config');
const routes = require('./routes');

app.use(express.json());

app.use('/', routes);

dbConnection();


app.post('/create', async (req, res) =>{
  try {
    const {titulo} = req.body;
    const tarea = new tarea({titulo});
    await tarea.save();
    res.json(tarea);
  }catch (error){

    res.status(4001).json({ error:'no es posible crear esta tarea'})
  }

  });

  app.get('/', async (req, res) => {
    try {
      const {titulo} = await tarea.find();
    res.json(tarea);
    }catch (error){
  
      res.status(4001).json({ error: 'no es posible obtener las tareas'})
    }
  
    });



  app.put('/markAsCompleted', async (req, res) => {
    try {
      const {tarea} = req.body();

      if(!tarea){
       return res.status(4001).json({ error: 'no es posible obtener las tareas'})
    }
    res.json(tarea)
  }catch (error){
    
res.status(4001).json({ error: 'no es posible obtener las tareas'})

  }
  
    });



    


app.listen(PORT, () => console.log(`Server started on port ${PORT}`));