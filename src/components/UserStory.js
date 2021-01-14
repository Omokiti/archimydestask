import React,{useState,Fragment} from "react"
import { useHistory } from "react-router";

import axios from 'axios';
import UserList from "./UserList";
const UserStory=()=>{

    
    const history = useHistory();
    const data=[
        {
        id:"",status:true,summary:"",description:"",type:"",complexity:"",cost:"",time:""
        }
    ]
    
     
    const[state,setState]=useState(data)

   

 const handleInput=e=>{
    setState({...state,[e.target.name]:[e.target.value]})
    }

   const handleSubmit=(event)=>{
       event.preventDefault()
        console.log(state)
       
        const payload={
        summary:summary,
        description:description,
        type:type,
        complexity:complexity,
        cost:cost,
        time:time
        }
        axios({
        url:"http://localhost:3000/api/v1/stories",
        body: JSON.stringify(state),
        method:'POST',
        headers:{
        'Accept':'application/json',
        'Content-type':'application/json'
        },
        data:payload

        
        })
        .then(response=>{
            console.log(response)
            history.push({
                pathname:'/userList'})
           
        })
   }
    
        const{summary,description,type,complexity,cost,time}=state
        return(
            <Fragment>
             
              <div className="form">
              <form className="create" onSubmit={handleSubmit}>
                <h2>Create Your Task</h2>
               
                <input type="text" placeholder="summary" name="summary" value={summary} onChange={handleInput} required/>
                
                
                <textarea rows="4" cols="50" placeholder="Description" name="description" value={description} onChange={handleInput} required></textarea>
 
     <br/>
    <label className="ml-5 pl-5" htmlFor="type">Type of Task:</label>
   
   <select value={type} name="type" onChange={handleInput}>
    <option value="development">Development</option>
    <option value="bugfix">BugFix</option>
    <option value="testing">Testing</option>
    </select>
 
    <label  className="ml-5" htmlFor="complexity">Complexity</label>
    <select value={complexity} name="complexity" onChange={handleInput}>
    <option value="low">Low</option>
    <option value="mid">Mid</option>
    <option value="High">High</option>
    </select>
   
    
     <input type="text" placeholder="estimated time for completion" name="time" onChange={handleInput} value={time} required/>
     
     <input type="number" placeholder="$" name="cost" onChange={handleInput} value={cost} required/>

     <button type="submit">Submit Task</button>

            </form>
           
              </div>
              
              <UserList {... data.map((item => (
             <div key={item.id}>
              <div>{item.summary}</div>

             </div>
          )))}
      />
              
      
            </Fragment>
        
       
        
        )
    }

   


export default UserStory;