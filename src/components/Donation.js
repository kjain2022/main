import React, { useState } from 'react';
import "../App.css";
import {db} from "./firebase"; 


const Donation = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [pickup, setPickup] = useState("");
    const [time, setTime] = useState("");
    const [type, setType] = useState("");
    const [quantity, setQuantity] = useState("");
    


    
    

    const handleSubmit = (e) => {e.preventDefault();
    

    db.collection("contacts").add({
        name:name,
        email:email,
        phone:phone,
        pickup:pickup,
        time:time,
        type:type,
        quantity:quantity,
        
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
    setPickup('');
    setTime('');
    setType('');
    setQuantity('');
    
    
};

  return (
    <form className="form" onSubmit= {handleSubmit}>
        <h1>Donate Now!</h1>

        <label>Name</label>
        <input placeholder=" Full Name" value={name} onChange={(e) => setName(e.target.value)}/>

        <label>Email</label>
        <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>

        <label>Phone</label>
        <input placeholder="Enter your contact number" value={phone} onChange={(e) => setPhone(e.target.value)}/>

        <label> Donation Pickup Address</label>
        <input placeholder="Enter the address from where you want us to pickup your donation!" value={pickup} onChange={(e) => setPickup(e.target.value)}/>

        <label> Pickup Time</label>
        <input placeholder="Ex. 16:00" value={time} onChange={(e) => setTime(e.target.value)}/>

        <label>Type of Food</label>
        <input placeholder=" Ex. Chicken Sandwich" value={type} onChange={(e) => setType(e.target.value)}/>

        <label>Quantity (in g)</label>
        <input placeholder=" Ex. 200g" value={quantity} onChange={(e) => setQuantity(e.target.value)}/>


        

        <button type="submit>">Submit</button>
      
    </form>
  )
}

export default Donation;
