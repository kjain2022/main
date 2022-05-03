import React, { useState } from 'react';
import "../App.css";
import {db} from "./firebase"; 


const Volunteer = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [age, setAge] = useState("");
    const [address, setAddress] = useState("");
    const [why, setWhy] = useState("");
    
    

    const handleSubmit = (e) => {e.preventDefault();
    

    db.collection("contacts").add({
        name:name,
        email:email,
        phone:phone,
        age:age,
        address:address,
        why:why,
        
    })

    .then(() => {
        alert('Thank you for showing interest in joining Smile. Your request has been submitted!');
    })
    .catch((error) => {
        alert(error.message);
    });

    setName('');
    setEmail('');
    setPhone('');
    setAge('');
    setAddress('');
    setWhy('');

    
    
};

  return (
    <form className="form" onSubmit= {handleSubmit}>
        <h1>Join Smile!</h1>

        <label>Name</label>
        <input placeholder=" Full Name" value={name} onChange={(e) => setName(e.target.value)}/>

        <label>Email</label>
        <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>

        <label>Phone</label>
        <input placeholder="Enter your contact number" value={phone} onChange={(e) => setPhone(e.target.value)}/>

        <label> Age </label>
        <input placeholder="Ex. 21" value={age} onChange={(e) => setAge(e.target.value)}/>

        <label>Address</label>
        <input placeholder="Your contact address" value={address} onChange={(e) => setAddress(e.target.value)}/>

        <label>Why do you want to join Smile?</label>
        <textarea placeholder='I want to join Smile because....' value={why} onChange={(e) => setWhy(e.target.value)}
        ></textarea>

        <button type="submit>">Submit</button>
      
    </form>
  )
}

export default Volunteer;
