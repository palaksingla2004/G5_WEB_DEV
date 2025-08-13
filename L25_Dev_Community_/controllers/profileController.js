const Profile = require("../models/profileModel");

// Get profile
const getProfileDetails = async (req, res) => {
    try {
        const data = await Profile.find({});
        res.status(200).json({
            message: "All Data of Profile",
            data
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Add profile
const addProfileDetails = async (req, res) => {
    const { profileImg, experience, githubProfile, linkedinProfile, codingPlatform, skills, location, achievements } = req.body;
    const { _id } = req.user[0];

    // Validate Data
    if (!profileImg || !experience || !githubProfile || !linkedinProfile || !codingPlatform || !skills || !location || !achievements) {
        return res.status(400).json({ error: "Please add all fields!!" });
    }

    const userProfile = await Profile.find({ userId: _id });
    if (userProfile.length > 0) {
        return res.status(400).json({ message: "Profile Already exists" });
    }

    const newProfile = new Profile({
        userId: _id,
        profileImg,
        experience,
        githubProfile,
        linkedinProfile,
        codingPlatform,
        skills,
        location,
        achievements
    });

    const profileAdd = await newProfile.save();

    return res.status(201).json({
        message: "Data Added Successfully",
        data: profileAdd
    });
};

// Update profile
const updateProfileDetails = async (req, res) => {
    try {
        const { _id } = req.user[0]; // Logged-in user ID

        let profile = await Profile.findOne({ userId: _id });
        if (!profile) {
            return res.status(404).json({ message: "Profile not found" });
        }

        profile = await Profile.findOneAndUpdate(
            { userId: _id },
            { $set: req.body },
            { new: true, runValidators: true }
        );

        return res.status(200).json({
            message: "Profile updated successfully",
            data: profile
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = { getProfileDetails, addProfileDetails, updateProfileDetails };
