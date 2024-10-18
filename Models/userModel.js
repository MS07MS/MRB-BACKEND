const client = require('../Configurations/dbConfiguration');

const createUser = async (username, email, password) => {
    const query = 'INSERT INTO userregistration_schema.user_reg (username, email, password) VALUES ($1, $2, $3)';
    const values = [username, email, password];
    console.log(values,'models')

    try {
        const result = await client.query(query, values);
        return result;
    } catch (err) {
        console.error('Database query error:', err.stack);
        throw err; 
    }
};

module.exports = {
    createUser
};