import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Navbar from './navbar';
export default function Create() {
    const [user, setUser] = useState({
        name: "",
        email: "",
        gender: "",
        age: "",
        hobby: "",
        homeAddress: "",
        city: "",
        state: "",
        country: "",
        pincode: ""
    });
    async function addUser(e) {
        e.preventDefault();
        const newUser = { ...user };
        console.log(newUser);
        await fetch("http://localhost:8088/user", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                'Accept': 'application/json'
            },
            body: JSON.stringify(newUser)
        }).then(resp => { console.log("resp=", resp) })
    };
    const addData = (e) => {
        return setUser((prev) => {
            setUser({ ...prev, [e.target.name]: e.target.value });
        })
    };

    return (
        <div>
            <h3>Add New User</h3>
            <form onSubmit={addUser}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        // value={user.name}
                        onChange={addData}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        // value={user.email}
                        onChange={addData}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="gender">Gender</label>
                    <input
                        type="text"
                        className="form-control"
                        id="gender"
                        name="gender"
                        // value={user.gender}
                        onChange={addData}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="age">Age</label>
                    <input
                        type="number"
                        className="form-control"
                        id="age"
                        name="age"
                        // value={user.age}
                        onChange={addData}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Hobby</label>
                    <input
                        type="hobby"
                        className="form-control"
                        id="hobby"
                        name="hobby"
                        // value={user.hobby}
                        onChange={addData}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="homeAddress">Home Address</label>
                    <input
                        type="text"
                        className="form-control"
                        id="homeAddress"
                        name="homeAddress"
                        // value={user.email}
                        onChange={addData}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="city">City</label>
                    <input
                        type="text"
                        className="form-control"
                        id="city"
                        name="city"
                        // value={user.email}
                        onChange={addData}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="state">State</label>
                    <input
                        type="text"
                        className="form-control"
                        id="state"
                        name="state"
                        // value={user.email}
                        onChange={addData}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="country">Country</label>
                    <input
                        type="text"
                        className="form-control"
                        id="country"
                        name="country"
                        // value={user.email}
                        onChange={addData}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="pincode">Pin</label>
                    <input
                        type="number"
                        className="form-control"
                        id="pincode"
                        name="pincode"
                        // value={user.email}
                        onChange={addData}
                    />
                </div>
                <div className="form-group">
                    <button className="btn btn-primary" onClick={addUser} type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}