import { useState } from 'react'
import {Users} from "./user.js"
import Table from './Table.jsx';


function App() {

  const [query,setQuery] = useState("");

  // console.log(query);
  // console.log(Users.filter(user =>
  //   user.first_name.toLowerCase().includes("my")
  // ))

  const search = (data) => {
    return data.filter((item) => item.first_name.toLowerCase().includes(query));
  };

  return (
    <>
  <input type="text" placeholder='Search...' className="search" 
 onChange={e => setQuery(e.target.value)} />
  
  <Table data = {search(Users)} />
    </>
  )
}

export default App
