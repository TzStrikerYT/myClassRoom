const User = require('../Models/User')

const getUsers = async (req, res) => {
    res.json({hi: "Bonyour"})
}

module.exports = {
    getUsers
}