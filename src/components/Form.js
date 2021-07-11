import React, { useState } from 'react';




const Form = props => {
    const [firstName, setfirstName] = useState("");
    const [lastName, setlastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("password");
    const [cnfrmPassword, setcnfrmPassword] = useState("");


    return(
        <div>
            <form>
                <div className="form-group w-25">
                    <label>First Name:</label>
                    <input className="form-control" type="text"onChange={(event)=>setfirstName(event.target.value)}/>
                    <label>Last Name:</label>
                    <input className="form-control" type="text" onChange={(event)=>setlastName(event.target.value)}/>
                    <label>Email:</label>
                    <input className="form-control" type="email" onChange={(event)=>setEmail(event.target.value)}/>
                    <label>Password:</label>
                    <input className="form-control" type="password" onChange={(event)=>setPassword(event.target.value)}/>
                    <label>Confirm Password:</label>
                    <input className="form-control" type="password" onChange={(event)=>setcnfrmPassword(event.target.value)}/>
                </div>
            </form>
            <h1>Live Feed:</h1>
            <h3>First Name: {firstName}</h3>
            <h3>Last Name: {lastName}</h3>
            <h3>Email: {email}</h3>
            <h3>Password: {password}</h3>
            <h3>Confirm Password: {cnfrmPassword}</h3>
        </div>
    )
}

export default Form;