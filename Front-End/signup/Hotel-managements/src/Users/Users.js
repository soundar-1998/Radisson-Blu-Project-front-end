import React, { useContext } from 'react'
import{Link} from'react-router-dom'
import Users1 from '../Users/Users1'
import { GlobalContext } from '../Context/Globalstate'
const User = () => {
 
 
const{users,setUsers}=useContext(GlobalContext);
 
const deleteUser =(id1)=>
  {
setUsers((currUsers)=>{
  
  return currUsers.filter((j1)=>j1.id !== id1) //filter and delete
})
}

 //user['asdfgew4552416',"soundar","soundarrajan2704@gamil.com",9597117742,26,"developer"]
 
  return (
    <div>

<h1> I am from Users-js</h1>
{Users1.length === 0 ?
(<div>
  <h1>No details found in the page</h1>
 <h2> <Link to="/"> Go to Home</Link></h2>
</div>):
(users.map((k1)=>(
 <Users1 key={k1.id}
name={k1.name}
jobRole={k1.jobRole}
age={k1.age}
contact={k1.contact}
email={k1.email}
deleteUser={()=>deleteUser(k1.email)}/> // function calling inculding id
)))
}</div>
  )
}

export default User

//it make request to gs  to retrieve details....

////sample(12 ,34 callback)

////<user1 key={key.id}  />

//// const mani= function(); type2