const checkAdmin = (req, res, next) => {
    if(req.user.role != "admin" &&
        req.user.role != "superadmin"
    ) {
        return res.send("Access Denied");
    }
    next();
};
module.exports = checkAdmin;