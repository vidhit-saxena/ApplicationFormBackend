const Application = require('../models/Application');


exports.createApplication = async (req, res) => {
    try {
        let registrationProofUrl = '';
        if (req.file) {
            const result = await cloudinary.uploader.upload(req.file.path, {
                folder: 'registrationProofs'
            });
            registrationProofUrl = result.secure_url;
        }

        const newApplication = new Application({
            ...req.body,
            registrationProofUrl
        });

        await newApplication.save();
        res.status(201).json({ message: 'Application submitted successfully!' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to submit application', details: error });
    }
};




// Controller to get all applications
exports.getApplications = async (req, res) => {
    try {
        const applications = await Application.find();
        res.status(200).json(applications);
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve applications', details: error });
    }
};




// const cloudinary = require('cloudinary').v2;

// Configure Cloudinary
// cloudinary.config({
//     cloud_name: process.env.CLOUD_NAME,
//     api_key: process.env.API_KEY,
//     api_secret: process.env.API_SECRET
// });

// exports.createApplication = async (req, res) => {
//     try {
//         // Handle file upload to Cloudinary
//         const result = await cloudinary.uploader.upload(req.file.path, {
//             folder: 'registrationProofs'
//         });

//         // Create new application with uploaded image URL
//         const newApplication = new Application({
//             ...req.body,
//             registrationProofUrl: result.secure_url
//         });

//         await newApplication.save();
//         res.status(201).json({ message: 'Application submitted successfully!' });
//     } catch (error) {
//         res.status(500).json({ error: 'Failed to submit application', details: error });
//     }
// };

// exports.getApplications = async (req, res) => {
//     try {
//         const applications = await Application.find();
//         res.status(200).json(applications);
//     } catch (error) {
//         res.status(500).json({ error: 'Failed to retrieve applications', details: error });
//     }
// };