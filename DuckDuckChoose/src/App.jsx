import { useState } from 'react'
import './App.css'

function App() {
  

  return (
   
   <div id="mainform">
      <form class="forms" action="/submit-form" method="POST" >
        <label for="name">Name:</label>
        <input type="text" id="name" name="username" required/>

        <label for="name2">Name:</label>
        <input type="text" id="name" name="name2"required/>

        <button type="submit">Submit</button>
      </form>
   </div>
  
  )
}

export default App
