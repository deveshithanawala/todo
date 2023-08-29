import './App.css';
import React, {useState} from 'react';

function App() {

  const[newItem, setNewItem] = useState("");
  const[items, setItems] = useState([]);



  function addNewItem () {
    if(!newItem){
      alert("Please enter a todo");
      return;
    }
    const item = {
      id: Math.random(1000),
      value : newItem,
      completed: false
    };
    setItems(oldList=>[...oldList,item]);
    setNewItem("");

  }

  function deleteItems(id){
    const newArray = items.filter(item=> item.id !== id);
    setItems(newArray);
  }

  function completeItems(id){
    const updatedItems = items.map(item => {
      if (item.id === id) {
        return {
          ...item,
          completed: !item.completed,
        };
      }
      return item;
    });
    setItems(updatedItems);
  }


  return (
    <div className="App">
      <h1> TODO APP </h1>
      <div className='Input'>
      <input type= "text" 
        placeholder='Enter your todos'
        value={newItem}
        onChange={e=> setNewItem(e.target.value)} 

        >

      </input>
      <button onClick={addNewItem}>
        ADD
      </button>
       
      
      <ul>
      {
          items.map(item=>{
            return(
              <li key={item.id} className={item.completed ? 'completed' : ''}>
                <span
                  onClick={() => completeItems(item.id)}
                  style={{ textDecoration: item.completed ? 'line-through' : 'none' }}
                >
                  {item.value}
                </span>
              <button onClick={()=>completeItems(item.id)}>COMPLETE</button>
              <button onClick={() => deleteItems(item.id)}>DELETE</button>
              </li>
            )
          })
        }
      </ul>
      
      </div>
    </div>
  );
}

export default App;
