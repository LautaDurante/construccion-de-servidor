// Importamos el modelo
const TaskModel = require('../src/models/tasks');

// Inicializamos el objeto CtrlTask
const ctrlTask = {};

ctrlTask.getTasks = async (req, res) => {
    const Tasks = await TaskModel.find();

    return res.json(
        {
            message: "Tareas Encontradas.",
            Tasks
        }
    )
}

ctrlTask.postTask = async (req, res) => {
    const {nombre, motivo, fecha, estado} = req.body;

    const newTask = new TaskModel(
        {
            nombre,
            motivo,
            fecha,
            estado
        }
    );

    const Task = await newTask.save();

    return res.json(
        {
            message:"Tarea guardada correctamente.",
            Task
        }
    )

};

ctrlTask.putTask = async (req, res) => {
    const id = req.params.IdTask
    return res.json(
        {
            message: "REQ PUT",
        }
    )
}

ctrlTask.deleteTask = async (req, res) => {
    const id = req.params.IdTarea;
    try {
     await TaskModel.findByIdAndUpdate(id, {isActive:false});

     
    } catch (err) {
      console.log(err.message)
      return res.status(500).json({ 
        msg: 'Internal Server Error' 
     })
    }
};

// Exportamos el controlador
module.exports = ctrlTask;