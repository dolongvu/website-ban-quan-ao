const Users = require("../models/userModel");

const authAdmin = async (req, res, next) => {
  try {
    //get userr information by id(lấy thông tin người dùng theo id)
    const user = await Users.findOne({
      _id: req.user.id,
    });
    if (user.role === 0)
      return res.status(404).json({ msg: "admin resour access denied" });
      next()
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};
module.exports = authAdmin;
