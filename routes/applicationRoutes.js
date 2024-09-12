const express = require('express');
const multer = require('multer');
const cloudinary = require('cloudinary').v2;
const applicationController = require('../controllers/applicationController');
// const sendEmail = require('../controllers/sendMail')

const router = express.Router();

// Configure Cloudinary
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
});
// Multer setup for file upload
// const upload = multer({ dest: 'uploads/' });
// Multer setup for file upload
const storage = multer.diskStorage({});
const upload = multer({ storage });

// // Route to create a new application
router.post('/submit', upload.single('registrationProof'), applicationController.createApplication);

// // Route to get all applications
// router.get('/submissions', applicationController.getApplications);
router.get('/submissions', applicationController.getApplications);


module.exports = router;





//To send email
// router.get('/sendEmail', sendEmail)

//API to handle form submission
// router.post('/submit', async (req, res) => {
//     try {
//         const applicationData = new Application(req.body);
//         await applicationData.save();
//         res.status(201).send({ message: 'Form submitted successfully!' });
//     } catch (error) {
//         res.status(500).send({ message: 'Error submitting the form', error });
//     }
// });
// router.post('/api/applications', async (req, res) => {
//     try {
//         // your logic to process the form
//         const result = await someFunction(); // processing logic here
//         res.status(200).json({ message: "Form submitted successfully", data: result });
//     } catch (error) {
//         console.error("Error processing form:", error);
//         res.status(500).json({ message: "Error submitting the form", error: error.message });
//         console.log(error.message);
//     }
// });


// // API to get all form submissions
// router.get('/submissions', async (req, res) => {
//     try {
//         const applications = await Application.find();
//         res.status(200).json(applications);
//     } catch (error) {
//         res.status(500).send({ message: 'Error retrieving submissions', error });
//     }
// });