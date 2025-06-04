import React from 'react'
import { useState } from 'react'
const Form = () => {
    const [email, setEmail] = useState("")

    const handleForm= () =>{
        alert("Submitted")
        console.log(email)
    }
  return (
   <>
   <form action={handleForm}>
    <h2>Login Form</h2>
    <label>Email:<br></br>
        <input type='email' value={email} onChange={(e) =>
                            setEmail(e.target.value)
                        } placeholder='john@gmail.com' required></input><br></br>
    </label>
      <label>Password:<br></br>
        <input type='password' required></input><br></br>
    </label>
    <button>Login</button>
   </form>

   </>
  )
}

export default Form
