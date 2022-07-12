import { useState } from 'react';
// import CheckCircleIcon from '@mui/icons-material/CheckCircle';
// import EditIcon from '@mui/icons-material/Edit';
// import DeleteIcon from '@mui/icons-material/Delete';

export default function Todo({
  todo,
  toggleComplete,
  handleDelete,
  handleEdit,
}) {
  const [newTitle, setNewTitle] = useState(todo.title);
  const handleChange = (e) => {
    e.preventDefault();
    if (todo.completed === true) {
      setNewTitle(todo.title);
    } else {
      todo.title = '';
      setNewTitle(e.target.value);
    }
  };

  return (
    <div className='todo'>
      <input
        style={{ textDecoration: todo.completed && 'line-through' }}
        type='text'
        className='list'
        onChange={handleChange}
      />
      <div>
        <button
          className='button-complete'
          onChange={() => toggleComplete(todo.id)}
        >
          {/* <CheckCircleIcon id='i' /> */}
          complete
        </button>
        <button
          className='button-edit'
          onChange={() => handleEdit(todo, newTitle)}
        >
          {/* <EditIcon id='i' /> */}
          edit
        </button>
        <button
          className='button-delete'
          onChange={() => handleDelete(todo.id)}
        >
          {/* <DeleteIcon id='i' /> */}
          delete
        </button>
      </div>
    </div>
  );
}
