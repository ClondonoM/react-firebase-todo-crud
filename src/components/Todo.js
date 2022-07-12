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
        value={todo.title === '' ? newTitle : todo.title}
      />
      <div>
        <button
          className='button-complete'
          onClick={() => toggleComplete(todo)}
        >
          {/* <CheckCircleIcon id='i' /> */}
          Done
        </button>
        <button
          className='button-edit'
          onClick={() => handleEdit(todo, newTitle)}
        >
          {/* <EditIcon id='i' /> */}
          Edit
        </button>
        <button className='button-delete' onClick={() => handleDelete(todo.id)}>
          {/* <DeleteIcon id='i' /> */}
          Delete
        </button>
      </div>
    </div>
  );
}
