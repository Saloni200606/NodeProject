const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
    const token = req.headers.authorization;

    if(!token) {
        return res.send("Please Login");
    }
    try {
        const decoded = jwt.verify(
            token,
            "mysecretkey"
        );
        req.user = decoded;
        next();
    } catch(error) {
        res.send("Invalid token");
    }
};
module.exports = auth;