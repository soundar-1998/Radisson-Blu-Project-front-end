import React from 'react'
import  './Users.css'
const User1 = ({id,name,email,age,contact,jobRole,deleteUser}) => {
  return (
    <div className='app'>
<h5>Registered</h5>
<h2>UID:<span>{id}</span></h2>
<h2>Name:<span>{name}</span></h2>
<h2>EMAIL:<span>{email}</span></h2>
<h2>CONTACT:<span>{contact}</span></h2>
<h2>AGE:<span>{age}</span></h2>
<h2>ROLE:<span>{jobRole}</span></h2>
<button className="user_delete"  onClick={deleteUser}>Trash</button>


    </div>
  )
}

export default User1