import Header from './components/Header';
import Tasks from './components/Tasks';
import { useState } from "react"
import AddTask from './components/AddTask';

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([
    {
      id: 0,
      text: 'Food master class',
      day: 'Feb 5th at 2:30pm',
      reminder: true
  
    },
    {
      id: 1,
      text: 'Walk with Sofia',
      day: 'Feb 8th at 2:30pm',
      reminder: true
  
    },
    {
      id: 2,
      text: 'Find that dress',
      day: 'Feb 14th at 2:30pm',
      reminder: false
  
    },
  ])

  const deleteTask = (id)=>{
    console.log('delete', id);
    setTasks(tasks.filter((task)=>task.id !== id));
  }

  const toggleReminder = (id)=>{
    console.log('toggle', id);
    setTasks(tasks.map((task)=>task.id === id ? {...task, reminder: !task.reminder} : task));
  }

  const addTask = (task)=>{
    console.log('add', task);
    const id = getRandom();

    const newTask = {id, ...task}
    setTasks([...tasks, newTask]);
  }

  const getRandom = () =>{
    return Math.floor(Math.random()*1000)+ 1;
  }

  return (
    <div className='container'>
      <Header 
      onAdd={()=>setShowAddTask(!showAddTask)} 
      title='Task Tracker'
      showAdd={showAddTask}/>
      {showAddTask && <AddTask onAdd={addTask}/>}
      {tasks.length>0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> : 'No tasks'}
    </div>
  );
}

export default App;
