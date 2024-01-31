import { BrowserRouter, Routes, Route } from "react-router-dom"
import Create from "./component/addUser";
import RecordList from "./component/getUsers";
import EditUser from "./component/editUser";
import Navbar from "./component/navbar";
import './App.css';


function App() {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route exact path="/" element={<Create />} />
                <Route path="/users" element={<RecordList />} />
                <Route path="/user/:email" element={<EditUser />} />
                <Route path="/user" element={<Create />} />
            </Routes>
        </div>


    );
}

export default App;
