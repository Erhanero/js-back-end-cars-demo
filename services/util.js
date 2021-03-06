const bcrypt = require("bcrypt");

async function hashPassword(password) {
    return await bcrypt.hash(password, 10);
}

async function comparePassword(password, hashedPassword) {
    return await bcrypt.compare(password, hashedPassword)
}

function isLoggedIn() {
    return function (req, res, next) {
        if (req.session.user) {
            next();
        } else {
            res.redirect("/login")
        }
    }
}

module.exports = {
    hashPassword,
    comparePassword,
    isLoggedIn
}