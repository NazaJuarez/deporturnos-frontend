import React, { useState } from 'react'

function Tarea({ task, editarTarea, marcarCompletada, eliminarTarea }) {

    const [editedName, setEditedName] = useState(task.name)
    const [editing, setEditing] = useState(false)
    

    //Función para guardar los cambios después de editar la tarea
    const guardarCambios = () => {
        if (editedName.trim() !== '') {
            editarTarea(task.id, editedName)
            setEditing(false)
        }
    }

    return (
        <div className='Tareas'>
            {editing ? (
                <input type="text"
                    value={editedName}
                    onChange={e => setEditedName(e.target.value)}
                    onBlur={guardarCambios}
                    autoFocus
                />
            ) : (

                <div>
                    <span style={{textDecoration: task.completed ? 'line-through' : 'none'}}> {task.name} </span>
                    <button onClick={() => marcarCompletada(task.id)}>
                    {task.completed ? 'Desmarcar' : 'Marcar como Completada'}
                 
                    </button>
                    <button className='btn-edit' onClick={() => setEditing(true)}> Editar </button>
                    <button className='btn-delete' onClick={() => eliminarTarea(task.id)}> Eliminar </button>
                </div>

            )}
        </div>
    )
}

export default Tarea