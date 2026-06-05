const checkSuperAdmin = (req, res, next) => {
    if(req.user.role != "superadmin") {
        return res.send("Only SuperAdmin Allowed");
    }
    next();
};
module.exports = checkSuperAdmin;
