import React, { useState }  from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

function Todo() {
  const [todo, setTodo] = useState({desc: '', date: ''});
  const [todos, setTodos] = useState([]);

  const addTodo = (event) => {
    event.preventDefault();
    setTodos([...todos, todo]);
  }

  const inputChanged = (event) => {
    setTodo({...todo, [event.target.name]: event.target.value});
  } 

  return (
    <div className="App">
      <TextField type="date" name="date" value={todo.date} onChange={inputChanged}/>
      <TextField label="Description" type="text" name="desc" value={todo.desc} onChange={inputChanged}/>
      <Button variant="contained" color= "primary" size="medium" onClick={addTodo}>Add</Button>
      <table><tbody>
      {
      todos.map((todo, index) => 
        <tr key={index}>
          <td>{todo.date}</td>
          <td>{todo.desc}</td>
        </tr>)
      }
      </tbody></table>
    </div>
  );
}

export default Todo;
