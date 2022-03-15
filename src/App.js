import './App.css';
import {useState} from 'react'

function App() {
  const[toDos,setTodos]=useState([])
  const [toDo,setTodo]=useState('')
  return (
    <div className="app">
    <div className="mainHeading">
      <h1>ToDo List</h1>
    </div>
    <div className="subHeading">
      <br />
      <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
    </div>
    <div className="input">
      <input type="text"value={toDo} onChange={(e)=>setTodo(e.target.value)} placeholder="🖊️ Add item..." />
      <i onClick={()=>setTodos([...toDos,{id:Date.now(),text:toDo,status:false}])} className="fas fa-plus"></i>
    </div>
    <div className="todos">
    
   {
     toDos.map((value)=>{
       return(
        <div className="todo">
        <div className="left">
          <input onChange={(e)=>{
            console.log(e.target.value)
            console.log(value);
            setTodos(toDos.filter(obj2=>{
              if(obj2.id=== value.id){
                obj2.status=e.target.checked
         
              }
              return obj2
            }))
          }} value={value.status} type="checkbox" name="" id="" />
          <p>{value.text}</p>
        </div>
        <div className="right">
          <i  className="fas fa-times"></i>
        </div>
      </div>
       )
     })
   }
     <h1 style={{color:"red"}}>Checked Lits</h1>
   {
     toDos.map((obj)=>{
       if(obj.status){
         return(<h1>{obj.text}</h1>)

       }
       return null
     })
   }
    </div>
  </div>
  );
}

export default App;
