const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const applicationRoutes = require('./routes/applicationRoutes');
const sendMail = require('./controllers/sendMail');

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb+srv://vidhitsaxena971:U1TXVPbPsPs4DtnD@cluster0.dfja9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0').then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Could not connect to MongoDB:', err));

// Routes
app.use('/api/applications', applicationRoutes);

// app.get('/sendmail', sendMail);
app.get('/send-email', async (req, res) => {
    try {
        await sendMail(req, res); // Call the sendMail function
    } catch (error) {
        console.error('Error occurred while sending email:', error);
        res.status(500).send('Failed to send email');
    }
});

// app.get('/api/applications', applicationRoutes);
// Start server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
