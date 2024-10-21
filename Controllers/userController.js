const userModel = require('../Models/userModel')



const registerUser = async (req, res) => {
    console.log(req.body,'routes')
    const { username, email, password, confirmPassword } = req.body;

    if (!username || !email || !password || password !== confirmPassword) {
        return res.status(400).json({ message: 'Invalid data provided' });
    }

    try {
        const result = await userModel.createUser(username, email, password);

        if (result) {
            return res.status(201).json({ statusCode:201,message: 'User registered successfully' });
        }
    } catch (err) {
        console.error('Error registering user:', err);
        return res.status(500).json({ message: 'Database error' });
    }
};

module.exports = {registerUser};