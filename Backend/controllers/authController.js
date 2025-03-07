const bcrypt = require('bcryptjs');
const User = require('../models/User');

exports.signupUser = async (req, res) => {
    try {
        const { username, password, ...otherDetails } = req.body;

        const existingUser = await User.findOne({ username });
        if (existingUser) return res.status(400).json({ message: "Username already exists" });

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ username, password: hashedPassword, ...otherDetails });

        await newUser.save();
        res.json({ message: "✅ User registered successfully!" });
    } catch (error) {
        res.status(500).json({ message: "❌ Error registering user", error });
    }
};
