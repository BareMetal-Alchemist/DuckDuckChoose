import { useState } from 'react'
import './App.css'

function App() {
  const [name, setName] = useState('');
  const [name2, setName2] = useState('');
  const [result, setResult] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    


    if (name.trim().toLowerCase() === "noah" && name2.trim().toLowerCase() === "angel" || name.trim().toLowerCase() === "angel" && name2.trim().toLowerCase() === "noah") {

      setResult('💖 CHOOSE! 💖');

    } else {

      setResult('🦆 DUCK! 💔');

    }




  }


  return (
   <div className="container">
    <div id="mainform">
        <div>
          <p>If they are your soulmate then CHOOSE them. If not then DUCK them.</p>
        </div>
        <form className="forms" onSubmit={handleSubmit} >
          <label htmlfor="name">Name:</label>
          <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required/>

          <label htmlfor="name2">Name:</label>
          <input type="text" id="name2" value={name2} onChange={(e) => setName2(e.target.value)} required/>

          <button type="submit">Submit</button>
        </form>
        {result && <p key={result} className="result">{result}</p>}
    </div>
   </div>
  
  )
}

export default App
