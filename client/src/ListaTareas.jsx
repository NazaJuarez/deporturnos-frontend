import React from 'react'
import Tarea from './Tarea'

function ListaTareas({tasks, editarTarea, marcarCompletada, eliminarTarea}) {
    
  return (
    <div className='ListaDeTareas'>
        <h3> Lista de Tareas </h3>
        
        <ul>{tasks.map(task => (
            <Tarea 
            key={task.id}
            task={task}
            editarTarea={editarTarea}
            marcarCompletada={marcarCompletada}
            eliminarTarea={eliminarTarea}
            />
        ))}
        </ul>
    </div>
  )
}

export default ListaTareas