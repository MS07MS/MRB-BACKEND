const express = require('express');
const router = express.Router();
const userController = require('../Controllers/userController')
//const client = require('../configurations/dbConfiguration'); 


// const registerUser = async (req, res) => {
//     console.log(req.body,'routes')
//     const { username, email, password, confirmPassword } = req.body;

//     if (!username || !email || !password || password !== confirmPassword) {
//         return res.status(400).json({ message: 'Invalid data provided' });
//     }

//     try {
//         const result = await userModel.createUser(username, email, password);

//         if (result) {
//             return res.status(201).json({ message: 'User registered successfully' });
//         }
//     } catch (err) {
//         console.error('Error registering user:', err);
//         return res.status(500).json({ message: 'Database error' });
//     }
// };

// router.post('/register', (req, res) => {
//     console.log(req.body,'from backend')
//     const { username, email, password, confirmPassword } = req.body;
//     if (!username || !email || !password || password !== confirmPassword) {
//         return res.status(400).json({ message: 'Invalid data provided' });
//     }

//     const query = 'INSERT INTO userregistration_schema.user_reg (username, email, password) VALUES ($1, $2, $3)';
//     const values = [username, email, password];

//     client.query(query, values, (err, result) => {
//         if (err) {
//             console.error('Error executing query', err.stack);
//             return res.status(500).json({ message: 'Database error' });
//         }

//         res.status(201).json({ message: 'User registered successfully' });
//     });

   
//     })
router.post('/register', userController.registerUser);

module.exports = router; 