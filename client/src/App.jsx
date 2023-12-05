import { useState } from 'react'
import './App.css'
import axios from 'axios';

function App() {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const res = await axios.post('/api/login',{email,name})
  } 

  return (
    <>
      <form>
        <label>Name</label>
        <input type="text" name='name' onChange={e=>setName(e.target.value)}/>
        <br/>
        <label>Email</label>
        <input type="email" name='email' onChange={e=>setEmail(e.target.value)}/>
        <br/>
        <button type="submit" onClick={handleSubmit}>Submit</button>
      </form>
    </>
  )
}

export default App
