
import { useState } from 'react'
const Form = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")

    const handleForm= () =>{
        alert("Submitted")
        console.log(name,email)
    }
  return (
   <>
   <form action={handleForm}>
    <h2>SignUp Form</h2>
      <label>Name:<br></br>
        <input type='name' value={name} onChange={(e) =>
                            setName(e.target.value)
                        } placeholder='Enter your name' required></input><br></br>
    </label>
    <label>Email:<br></br>
        <input type='email' value={email} onChange={(e) =>
                            setEmail(e.target.value)
                        } placeholder='Enter your email' required></input><br></br>
    </label>
      <label>Password:<br></br>
        <input type='password' placeholder='*******' required></input><br></br>
    </label>
     <label>Confirm Password:<br></br>
        <input type='password'  placeholder='*******' required></input><br></br>
    </label>
    <button>Submit</button>
   </form>

   </>
  )
}

export default Form
