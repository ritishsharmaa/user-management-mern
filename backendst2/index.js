import express from 'express';
import { connect } from './db/conn.js';
import cors from 'cors';
import userModel from './models/userModel.js';

const app = express();
// const cors = require("cors");
app.use(cors());

connect();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const port = process.env.PORT || 8088;

app.get("/users", async (req, res) => {
    const data = await userModel.find({});
    JSON.stringify(data);
    console.log(data);
    res.send(data);
})

app.get("/user/:email", async (req, res) => {

    try {
        const data = await userModel.findOne({ email: req.params.email });
        if (!data) return res.status(404).send("No user found");
        res.send(data);
    }
    catch (error) {
        console.log(error);
        return res.status(500).send(error);
    }
})

app.post("/user", async (req, res) => {
    // const data = new userModel(req.body);
    // console.log(data);
    // console.log(data);

    try {
        console.log(req.body);
        const data = req.body;
        const newData = {
            name: data.name,
            email: data.email,
            gender: data.gender,
            age: data.age,
            hobby: data.hobby,
            address: {
                homeAddress: data.homeAddress,
                city: data.city,
                state: data.state,
                country: data.country,
                pincode: data.pincode
            }
        };
        const newUser = new userModel(newData);
        await newUser.save();
        res.status(201).json(newUser);
    }
    catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});

app.put("/user/:email", async (req, res) => {
    const updatedData = req.body;
    console.log(updatedData);
    console.log(req.params);

    try {
        const userData = await userModel.findOne({ email: req.params.email });
        userData.name = updatedData.name || userData.name;
        userData.profileUrl = updatedData.profileUrl || userData.profileUrl;
        userData.experiences = updatedData.experiences || userData.experiences;
        userData.education = updatedData.education || userData.education;
        userData.skills = updatedData.skills || userData.skills;
        await userData.save();
        return res.status(200).json(userData);
    } catch (error) {
        return res.status(error.status || 500).json(error.message);
    }
})

app.delete("/user/:email", async (req, res) => {
    try {
        const data = await userModel.findOneAndDeleteOne({ email: req.params.email });

        if (!data) return res.status(404).send("No user found");
        console.log("done");
        return res.status(200).send();
    } catch (error) {
        return res.status(500).send(error);
    }
});


app.listen(port, (err) => console.log(`${port} listen`, err));