const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/wellbeingdb")
.then(()=>{
    console.log('mongodb connected');
})
.catch(()=>{
    console.log('failded to connect');
})

const UserSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        unique: true,
        required: true
    },
    password:{
        type: String,
        required: true
    }
});

const Users = new mongoose.model("Users", UserSchema);

const expertSchema = new mongoose.Schema({
    name: String,
    experience: Number,
    specialities: [String],
    rate: Number,
    viewProfileLink: String,
    bookSessionLink: String,
    image: String
});

const Experts = mongoose.model('Experts', expertSchema);

const bookingSchema = new mongoose.Schema({
    client_id: String,
    client_name: String,
    client_email: String,
    expert_id: String,
    expert_name: String,
    session_duration: String,
    session_mode: String,
    rate: Number
})

const Bookings = mongoose.model('Bookings', bookingSchema);

module.exports = { Users, Experts, Bookings };
