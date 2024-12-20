const adminModel = require("../../../db/models/adminModel");

const adminHomeController = async(_, res) => {
    try {
        const admin = await adminModel.findOne().populate("products");
        res.render("adminHome", {admin: admin});
    } catch (error) {
        console.log(error);
    };
};

module.exports = adminHomeController;