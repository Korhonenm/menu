import React, {useState} from 'react';
import './App.css';
import Home from './components/Home';
import Todo from './components/Todo';
import Tabs from'@mui/material/Tabs';
import Tab  from'@mui/material/Tab';


function App() {
  const[value, setValue] = useState(0);
  
  const handleChange= (event, value) => 
   {setValue(value);
  };

  return (
    <div className="App">
      <Tabs value={value} onChange={handleChange}>
        <Tab label="Home" />
        <Tab label="Todo"/>
      </ Tabs>
      {value=== 0 && <Home/>}
      {value=== 1 &&<Todo/>}
      
      
    </div>
  );
}

export default App;
