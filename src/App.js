import './App.css';
import CustomButton from './Component/CustomButton';
import CustomInput from './Component/CustomInput';
import Header from './Component/Header';
import Card from './Component/Card'
import { useState } from 'react';

function App() {
  const [add,setAdd]=useState(false);
  const [Tasks, setTasks]=useState([]);

  const [singleTask, setSingleTask]=useState('');
  const [singleDes, setSingleDes]=useState('');

  const UpdateTask=(id)=>
{
  setTasks(
    Tasks.map((t)=>(
      t.id==id? {...t,complete:true}:t
    ))
  )
}

const addToCard =()=>
{
  const id = Tasks.length==0?1:Tasks.length+1;
  const taskDetails=
  {
    id:id,
    task:singleTask,
    des:singleDes,
    complete:false
  }
  setTasks(
    [...Tasks,taskDetails]
  )
}

const deleteTask=(id)=>
{
  setTasks(
    Tasks.filter((t)=>(
      t.id==id?false:true
    ))
  )
}
const ClearInput =()=>
{
  setSingleTask('');
  setSingleDes('');
}

const handleCustomTask =(event)=>
{
setSingleTask(event.target.value);
}

const handleCustomDes =(event)=>
{
setSingleDes(event.target.value);
}

  const handleInput =()=>
  {
    setAdd(!add)
  }
  return (
    <div className="main">
     <div className="inputSection">
      <Header handleInput={ handleInput}/>
      {add==true ?
      <>
      <CustomInput value={singleTask} placeHolder='Enter Task' name='Task' change={handleCustomTask}/>
      <CustomInput value={singleDes} placeHolder='Enter Description' name='Description' change={handleCustomDes}/>
      <div className="btnWrapper">
    <CustomButton color='white' bg='#EA047E' name='Save' click={addToCard} />
    <CustomButton color='white' bg='darkred' name='Cancel'click={ClearInput} />
    </div>
      </>:null
      }

   

     </div>

     <div className="cardSection">
      {
        Tasks.map((t)=>
        (
          <Card title={t.task} des={t.des} id={t.id} key={t.id} delete={()=>deleteTask(t.id)} 
          update={()=>UpdateTask(t.id)} complete={t.complete}/>

        ))
      }
     </div>

      
    </div>
  );
}

export default App;
