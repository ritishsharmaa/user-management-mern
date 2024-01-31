
import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';
import Navbar from './navbar';

export default function EditUser() {
    const [editedUser, setEditUser] = useState({
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
    const [request_data, setRequestData] = useState([]);
    const { email } = useParams();
    useEffect(() => {
        async function fetchData() {
            const response = await fetch(`http://localhost:8088/user/${email}`, {
                method: "GET"
            });
            if (response.status == 200) {
                const data = await response.json();
                editedUser.name = data.name;
                editedUser.email = data.email;
                editedUser.gender = data.gender;
                editedUser.age = data.age;
                editedUser.hobby = data.hobby;
                editedUser.homeAddress = data.address.homeAddress;
                editedUser.city = data.address.city;
                editedUser.state = data.address.state;
                editedUser.country = data.address.country;
                editedUser.pincode = data.address.pincode;
                setRequestData(data);
            }
            if (response.status == 404) {
                console.log("Error occured")
            }
        };
        fetchData();
    }, []);
    const updateEditedData = async (e) => {
        e.preventDefault();
        const newData = { ...editedUser };
        // console.log(newData);
        await fetch(`http://localhost:8088/user/${email}`, {
            method: "PUT",
            // mode: 'no-cors',
            headers: {
                "Content-Type": "application/json",
                'Accept': 'application/json'
            },
            body: JSON.stringify(newData)
        }).catch(error => { console.log(error) })
    };
    return (
        <div>
            <h3>Update Record</h3>
            <form onSubmit={updateEditedData}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        value={editedUser.name}
                        onChange={(e) => setEditUser({ ...editedUser, name: e.target.value })}
                    />
                </div>
                {/* <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        value={user.email}
                        onChange={(e) => updateEditedData({ email: e.target.value })}
                    />
                </div> */}
                <div className="form-group">
                    <label htmlFor="gender">Gender</label>
                    <input
                        type="text"
                        className="form-control"
                        id="gender"
                        name="gender"
                        value={editedUser.gender}
                        onChange={(e) => setEditUser({ ...editedUser, gender: e.target.value })}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="age">Age</label>
                    <input
                        type="number"
                        className="form-control"
                        id="age"
                        name="age"
                        value={editedUser.age}
                        onChange={(e) => setEditUser({ ...editedUser, age: e.target.value })}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="hobby">Hobby</label>
                    <input
                        type="hobby"
                        className="form-control"
                        id="hobby"
                        name="hobby"
                        value={editedUser.hobby}
                        onChange={(e) => setEditUser({ ...editedUser, hobby: e.target.value })}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="homeAddress">Home address</label>
                    <input
                        type="text"
                        className="form-control"
                        id="email"
                        name="homeAddress"
                        value={editedUser.homeAddress}
                        onChange={(e) => setEditUser({ ...editedUser, email: e.target.value })}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="city">City</label>
                    <input
                        type="text"
                        className="form-control"
                        id="email"
                        name="city"
                        value={editedUser.city}
                        onChange={(e) => setEditUser({ ...editedUser, email: e.target.value })}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="state">State</label>
                    <input
                        type="text"
                        className="form-control"
                        id="email"
                        name="state"
                        value={editedUser.state}
                        onChange={(e) => setEditUser({ ...editedUser, email: e.target.value })}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="country">Country</label>
                    <input
                        type="text"
                        className="form-control"
                        id="email"
                        name="country"
                        value={editedUser.country}
                        onChange={(e) => setEditUser({ ...editedUser, email: e.target.value })}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="pincode">Pin</label>
                    <input
                        type="number"
                        className="form-control"
                        id="email"
                        name="pincode"
                        value={editedUser.pincode}
                        onChange={(e) => setEditUser({ ...editedUser, email: e.target.value })}
                    />
                </div>
                <div className="form-group">
                    <button className="btn btn-primary" onClick={updateEditedData} type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}