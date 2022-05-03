import React, { useState } from 'react';
import "../App.css";
import {db} from "./firebase"; 


const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");
    
    

    const handleSubmit = (e) => {e.preventDefault();
    

    db.collection("contacts").add({
        name:name,
        email:email,
        phone:phone,
        message: message,
    })

    .then(() => {
        alert('Message has been submitted');
    })
    .catch((error) => {
        alert(error.message);
    });

    setName('');
    setEmail('');
    setPhone('');
    setMessage('');
    
};

  return (
    <form className="form" onSubmit= {handleSubmit}>
        <h1>Contact Us</h1>

        <label>Name</label>
        <input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}/>

        <label>Email</label>
        <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>

        <label>Phone</label>
        <input placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)}/>

        <label>Message</label>
        <textarea placeholder='Message' value={message} onChange={(e) => setMessage(e.target.value)}
        ></textarea>

        <button type="submit>">Submit</button>
      
    </form>
  )
}

export default Contact;
