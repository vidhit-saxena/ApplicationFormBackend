const mongoose = require('mongoose');

const teamMemberSchema = new mongoose.Schema({
    name: String,
    gender: String,
    dob: Date,
    email: String,
    address: String,
    pinCode: String
});

const applicationSchema = new mongoose.Schema({
    fullName: { type: String, required: true },
    gender: { type: String, required: true },
    dob: { type: Date, required: true },
    qualification: { type: String, required: true },
    collegeName: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    pinCode: { type: String, required: true },
    fatherName: { type: String, required: true },
    fatherPhone: { type: String, required: true },
    careerGoal: { type: String, required: true },
    teamMembersCount: { type: Number, required: true },
    teamMembers: [teamMemberSchema],
    registrationProofUrl: { type: String, required: false }
});

const Application = mongoose.model('Application', applicationSchema);
module.exports = Application;
