import React, { useEffect, useState } from 'react';
import './App.css';
import {db} from "./firebase-config";
import { collection, getDocs, addDoc, updateDoc, deleteDoc,  doc} from "firebase/firestore";

function App() {
  const [newName, setNewName] = useState("")
  const [newAge, setnewAge] = useState(0)


// const [newName, setNewName] = useState("")
// const [newEmail, setNewEmail] = useState("")


  const [users, setUsers] = useState([]);
  const usersCollectionsRef = collection(db, "users")
  const [age, setAge] = useState()

  const createUser = async() => {
    await addDoc(usersCollectionsRef, {name: newName, age: Number(newAge)});

  };

  const updateUser = async(id, age)=> {
    const userDoc = doc(db, "users", id)
    const newFields = {age: age + 1}
    await updateDoc (userDoc, newFields);
    
  };

  const deleteUser = async(id)=> {
    const userDoc = doc(db, "users", id)
    await deleteDoc(userDoc)
  }

  useEffect(()=>{

    const getUsers = async ()=> {
       const data = await getDocs(usersCollectionsRef)
      setUsers(data.docs.map((doc)=> ({...doc.data(), id: doc.id})));

    };
    getUsers()
  }, [])
  return (
    <div>
      <input className='border-2' placeholder='Name...' onChange={(event)=> {setNewName(event.target.value)}}/>
      <input className='border-2' type='number' placeholder='Age...' onChange={(event)=> {setnewAge(event.target.value)}}/>
      <button className='border-2' onClick={createUser}>createUser</button>
      <div>
        {users.map((users)=> {
          return (
            <div>
             
              {" "}
              <h1>Name : {users.name}</h1>
              <h1>Age : {users.age}</h1>
              <button className='border-2' onClick={()=> {updateUser(users.id, users.age)} }>Increase Age</button>
              <button className='border-2' onClick={()=> {deleteUser(users.id)}}>Delete User</button>


            </div>
          )
        })}
      </div>
         <div className="container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10">
      <p className="text-3xl text-gray-700 font-bold mb-5">
        Welcome!
      </p>
      <p className="text-gray-500 text-lg">
        React and Tailwind CSS in action
      </p>
    </div>
    <div className="container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10">
      <p className="text-3xl text-gray-700 font-bold mb-5">
       About
      </p>
      <p className="text-gray-500 text-lg">
        My name is Ajasa Adedamola
      </p>
    </div>
    <div className="container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10">
      <p className="text-3xl text-gray-700 font-bold mb-5">
        Profile
      </p>
      <p className="text-gray-500 text-lg">
        Software Engineer with deep knowledge of tech space engineering
      </p>
    </div>
    <div className="container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10">
      <p className="text-3xl text-gray-700 font-bold mb-5">
        Contact Address
      </p>
      <p className="text-gray-500 text-lg">
        Silicon Valley 
      </p>
    </div>
    </div>
 

  );
}
export default App;
