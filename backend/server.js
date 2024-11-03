const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const PORT = process.env.PORT || 8080;
const SECRET_KEY = 'wellbeingadmin';

const { Users, Experts, Bookings } = require('./mongodb');




//middlewares
app.use(cors());
app.use(bodyParser.json());

app.get('/experts', async(req, res)=> {
    try {
        const experts = await Experts.find(); // Fetch all experts from the collection
        res.json(experts); // Send the data as JSON
    } catch (error) {
        res.status(500).json({ error: 'Error fetching experts data' });
    }
})

app.get('/experts/:id', async (req, res) => {
    try {
      const expert = await Experts.findById(req.params.id);
      if (!expert) return res.status(404).json({ error: 'Expert not found' });
      res.json(expert);
    } catch (error) {
      res.status(500).json({ error: 'Error fetching expert details' });
    }
  });

  app.get('/dashboard/:userID', async (req, res) => {
    try {
        const bookings = await Bookings.find({ client_id: req.params.userID });
        if (!bookings.length) return res.status(404).json({ error: 'No bookings found for this user' });
        res.json(bookings);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching bookings' });
    }
});


  app.post('/booksession/:id', async (req, res) => {
    try {
      const newBooking = {
        client_id: req.body.client_id,
        client_name: req.body.client_name,
        client_email: req.body.client_email,
        expert_id: req.body.expert_id,
        expert_name: req.body.expert_name,
        session_duration: req.body.session_duration,
        session_mode: req.body.session_mode,
        rate: req.body.rate
      };
  
      const result = await Bookings.insertMany([newBooking]);
      res.status(201).json({ message: 'Booking created successfully', data: result });
    } catch (err) {
      console.error("Error: ", err);
      res.status(500).json({ message: 'Error creating booking', error: err });
    }
  });

app.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await Users.findOne({ email });

        if (user && await bcrypt.compare(password, user.password)) {
            const token = jwt.sign({ id: user._id, email: user.email, name: user.name }, SECRET_KEY, { expiresIn: '1h' });
            res.status(200).json({ success: true, token, name: user.name, email: user.email, client_id: user._id }); 
        } else {
            res.status(401).json({ success: false, message: "Invalid email or password" });
        }
    } catch (err) {
        console.error("Error: ", err);
        res.status(500).json({ success: false, message: "Server error" });
    }
});


app.post('/register', async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const newUser = {
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword
        }
        const result = await Users.insertMany([newUser]);
        res.json(result);
        console.log(result);
    } 
    catch (err){
        console.error("Error: ", err);
    }
})



app.listen(PORT, ()=> console.log(`Server running at ${PORT}`));
