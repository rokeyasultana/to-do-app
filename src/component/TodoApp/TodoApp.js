import React, { useState } from 'react';
import './TodoApp.css'
import logo from '../../assets/logo.png'
const TodoApp = () => {

    const [task,setTask]= useState('');
const [taskList,setTaskList] = useState([]);
   
const handleChange = (e)=>{
        setTask(e.target.value)
    };
    const AddTask =()=>{
        if(taskList !== ""){
            const taskDetails = {
                id:Math.floor(Math.random()*1000),
                value: task,
                isCompleted: false,
            }
            setTaskList([...taskList,taskDetails])
        }
    };

    const deleteTask= (e, id)=>{
e.preventDefault();
setTaskList(taskList.filter(t => t.id != id))
    };

    const taskCompleted = (e,id)=>{
 e.preventDefault();
const element = taskList.findIndex(elem =>elem.id == id);
const newTaskList = [...taskList];
newTaskList[element] ={
    ...newTaskList[element],
    isCompleted: true,
}
setTaskList(newTaskList);
    }
   
    return (
        <div>
            <div>
            <img style={{height:'120px'}} src={logo} alt="" />
           </div>
      <h2 className='todo'>Todo List</h2>

            <input id='text' type="text" name="text"   onChange={e => handleChange(e)}     placeholder='Add task here'/>

            <button onClick={AddTask} className='btn'>Add</button><br></br>
            {taskList !== [] ?
            <ul>
                {
                    taskList.map(t => <li className={t.isCompleted ? "crossText":"list"}>
                        {t.value}
                        <button className='complete' onClick={e=> taskCompleted(e, t.id)} >Completed</button>

                       <button onClick={e=>deleteTask(e, t.id)} className='delete'>Delete</button>
                     
                    </li>)

                }
            </ul>
            : null        
            }
                </div>
    );
};

export default TodoApp;