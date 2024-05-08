import './App.css';
import { Todoform } from './components/Todoform';
import { Box , Typography} from '@mui/material';
import { useState , useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Todo } from './components/Todo';
import List from '@mui/material/List';

const getCurrTodos = () => {
  return JSON.parse(localStorage.getItem('todos')) || [];
}
function App() {
  const [todos, setTodos] = useState(getCurrTodos)
  const addTodo = (todo) => {
    const newTodo = {
      id: uuidv4(), // Generate unique id for the todo
      task: todo,
      isCompleted: false
  };
    setTodos(prevTodos => [...prevTodos, newTodo]);
  }

  const toggleCompleteStatus = (taskId) => {
    setTodos(prevTodos => prevTodos.map (todo => todo.id === taskId ? {...todo, isCompleted: !todo.isCompleted } : todo))
  }

  const deleteTodo = (taskId) => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== taskId));
  };

  // save todos to local storage whenever todos change
  useEffect(() => {
    console.log(localStorage.getItem('todos'))
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]); 

  return (
    <div className="App">
      {/* This box will hold the button + textfield, as well as divs of each of the tasks. */}
      <Box sx={{
        backgroundColor:'#DCD2CC',
        width:'35vw',
        display: 'flex',
        flexDirection:'column',
        textAlign: 'center'
      }}>
      <Typography
        sx={{
          marginTop: '15px',
          fontSize: {
            xs: '1rem',
            sm: '1.5rem', 
            md: '2rem', 
            lg: '2.5rem',  
          },
          fontFamily:'Verdana'
        }}
      >
        To-do List
      </Typography>
        <Todoform addTodo={addTodo}/>
        <List sx={{ width: '80%', bgcolor:'transparent', margin: '0 auto', display:'flex', 
          flexDirection:'column', justifyContent:'center',alignItems:'center' }}>
          {todos.map((todo) => (
            <Todo task={todo.task} key={todo.id} taskId={todo.id} isCompleted={todo.isCompleted} 
              toggleCompleteStatus={toggleCompleteStatus} deleteTodo={deleteTodo} />
          ))}
        </List>
      </Box>
    </div>
  );
}

export default App;
