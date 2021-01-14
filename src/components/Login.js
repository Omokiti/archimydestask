import React,{useState,Fragment} from "react";
import { useHistory } from "react-router";

import './Style.css';
import axios from "axios";

const Login =()=>{
    const history = useHistory();
    const[values,setValues]=useState({
        email:"" ,
        password:"" ,
        isAdmin:false
    })


    const{email,password}=values

    const handleInput=e=>{
        setValues({...values,[e.target.name]:[e.target.value]})
        }
    
  
   const handleSubmit=(event)=>{
   console.log(values)
   event.preventDefault()
   
   const payload={
    email:email,
    password:password,
    isAdmin:false
   }
  
   axios({
    url:"http://localhost:3000/api/v1/signin",
    method:'POST',
    mode:'no-cors',
    headers:{
    'Accept':'application/json',
    'Content-type':'application/json'
    },
    data:payload
   
    }
  
  
  )
  .then(response=>{
      console.log(response)
    history.push({
       pathname:'/userStory'
   })
  })
  .catch(error=>{
      console.log(error)
  })
    }

   
    return(
    <Fragment>
    <div className="form container">
       
    <form onSubmit={handleSubmit}>
    <h2>Login</h2>
     <input type="email" placeholder="Enter your Email" required  name="email" value={email} onChange={handleInput}/>
     <input type="password"placeholder="Enter your password" required name="password" value={password} onChange={handleInput}/>

     <button type="submit">Submit</button>
     </form>
    </div>
   

    </Fragment>
    )
}


export default  Login;