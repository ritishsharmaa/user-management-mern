import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './navbar';

const Record = (props) => (
    <tr>
        <td>{props.record.name}</td>
        <td>{props.record.email}</td>
        <td>{props.record.gender}</td>
        <td>{props.record.age}</td>
        <td>{props.record.hobby}</td>
        <td>{props.record.address.homeAddress}</td>
        <td>{props.record.address.city}</td>
        <td>{props.record.address.state}</td>
        <td>{props.record.address.country}</td>
        <td>{props.record.address.pincode}</td>
        <td>
            <Link className="btn btn-link" to={`/user/${props.record.email}`}>Edit</Link> |
            <button className="btn btn-link"
                onClick={() => {
                    props.deleteRecord(props.record.email);
                }}
            >
                Delete
            </button>
        </td>
    </tr >
);

export default function RecordList() {
    const [Users, setUsers] = useState([]);
    useEffect(() => {
        async function fetchUsers() {
            const response = await fetch("http://localhost:8088/users");
            if (!response.ok) {
                console.log("error");
                return;
            }
            const allUsers = await response.json();
            setUsers(allUsers);
            console.log(Users);
        }
        fetchUsers();
        return;
    }, []);

    async function deleteRecord(email) {
        await fetch(`http://localhost:8088/${email}`, {
            method: "DELETE"
        });

        const newRecords = Users.filter((el) => el.email !== email);
        setUsers(newRecords);
    }

    // This method will map out the records on the table
    function recordList() {
        return Users.map((record) => {
            return (
                <Record
                    record={record}
                    deleteRecord={() => deleteRecord(record.email)}
                    key={record.email}
                />
            );
        });
    }


    return (
        <div>
            <h3>Record List</h3>
            <table className="table table-striped" style={{ marginTop: 20 }}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Gender</th>
                        <th>Age</th>
                        <th>Hobby</th>
                        <th>Home Address</th>
                        <th>City</th>
                        <th>State</th>
                        <th>Country</th>
                        <th>Pincode</th>
                    </tr>
                </thead>
                <tbody>{recordList()}</tbody>
            </table>
        </div>
    )
}