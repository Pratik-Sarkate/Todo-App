import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { CreateTodo } from './components/CreateTodo'
import './App.css'
import { Todos } from './components/Todos'


const todos = [{
  title: "Go to gym",
  description: "At 7 am"
},{
  title: "Study",
  description: "At 10 am"
}];

function App() {
  // const [todos, setTodos] = useState([]);

  // below method not preferred to make fetch requests in react, we use useEffect()
  
  // fetch("http://localhost:3000/todos")
  // .then(async function(res){
  //     const data = await res.json();
  //     setTodos(data.todos);
  //   })

  return (
    <>
      <CreateTodo></CreateTodo>
      <Todos todos={todos}></Todos>
    </>
  )
}

export default App
