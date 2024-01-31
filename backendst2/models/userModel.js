import mongoose from "mongoose";

const addressScema = mongoose.Schema({
    homeAddress: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 100
    },
    city: {
        type: String,
        required: false,
        minLength: 3,
        maxLength: 30
    },
    state: {
        type: String,
        required: false,
        minLength: 3,
        maxLength: 30
    },
    country: {
        type: String,
        required: false,
        minLength: 3,
        maxLength: 30
    },
    pincode: {
        type: Number,
        required: false,
        minLength: 6,
        maxLength: 8
    }
})



const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 300
    },
    email: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 300,
        unique: true
    },
    gender: {
        type: String,
        required: false,
        minLength: 1,
        maxLength: 20
    },
    age: {
        type: String,
        required: false,
        minLength: 1,
        maxLength: 100
    },
    hobby: {
        type: String,
        required: false,
        minLength: 3,
        maxLength: 30
    },
    address: addressScema
})

// userSchema.pre('save', async function (next) {
//     // console.log(this, ">>>>>>", this.isNew);
//     if (this.isNew || this.isModified("password")) {
//         const hash = await bcrypt.hash(this.password, 10)
//         this.password = hash;
//         // console.log(this);
//     }
//     next();
// })

// userSchema.post('save', async function () {
//     this.password = undefined;
//     console.log("user is created, sent welcome mail", this);
// })

export default mongoose.model('user', userSchema)