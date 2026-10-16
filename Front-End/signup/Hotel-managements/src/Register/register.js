//Ai code
import React, { useState,useContext,useEffect} from 'react';
import './Register.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import { GlobalContext } from '../Context/Globalstate';

const Home = () => {
const {setUsers}=useContext(GlobalContext);
  //const{setUsers}=useContext(GlobalContext);// to connecting GC from Global state(Managing the global state)

  const[userinfo,setUserinfo]=useState([
  {
    id:"",
    name:"",
    email:"",
    contact:"",
    age:"",
    jobRole:"",

  }
])
useEffect(()=>
{
setUserinfo((currinfo)=>{
  return{
    ...currinfo,id:uuidv4()
  }
})
},[]
);
//   const handlechange=(event)=>
//     {
//       const {name,value}=event.target;
//       setUserinfo((currinfo)=>
//       {
// return{
//   ...currinfo,[name]:value
// }
//       })
//   }

  const [user,setUser] = useState({
    name: '',
    email: '',
    contact: '',
    age: '',
    jobRole: '',
    gender:'',
  });

  const handlechange = (event) => {
    const { name, value } = event.target;
    setUsers((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleAdd = (e) => {
    e.preventDefault();
    const registered = {
      name: user.name,
      email: user.email,
      contact: user.contact,
      age: user.age,
      jobRole: user.jobRole,
      gender:user.gender
    };

    axios.post('http://localhost:4000/app/Hotel-Management', registered).then((response) => {
        console.log(response.data);
        alert('Registered successfully');
        setUser({
          name: '',
          email: '',
          contact: '',
          age: '',
          jobRole: '',
          gender:''
        });
      })
      .catch((error) => {
        console.error("There was an error registering!", error);
      });
  };

  return (
    <div className="home">
      <div className="home_container">
        <div className="home_formContainer">
          <h1 className="home_title">REGISTER</h1>
          <input
            type="text"
            name="name"
            placeholder="Enter Name Here"
            value={userinfo.name}
            onChange={handlechange}
          />
          <input
            type="email"
            name="email"
            placeholder="Enter Email Here"
            value={userinfo.email}
            onChange={handlechange}
          />
          <input
            type="number"
            name="contact"
            placeholder="Enter Contact Number Here"
            value={userinfo.contact}
            onChange={handlechange}
          />
          <input
            type="number"
            name="age"
            placeholder="Enter Age Here"
            value={userinfo.age}
            onChange={handlechange}
          />
          <input
            type="text"
            name="jobRole"
            placeholder="Enter Jobrole Here"
            value={userinfo.jobRole}
            onChange={handlechange}
          />
          <input
            type="text"
            name="gender"
            placeholder="Enter gender Here"
            value={userinfo.gender}
            onChange={handlechange}
          />
          
          <button
            type="button"
            onClick={handleAdd}
            className="btn btn-primary"
          >
            SUBMIT
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home
