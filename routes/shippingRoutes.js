const express = require("express");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/Autho");
const {
  addShippingAddress,
  getUserShippingAddress,
  updateAddress,
  getAddressById,
} = require("../controllers/shippingAddController");

const router = express.Router();

router.route("/post/address").post(isAuthenticatedUser, addShippingAddress);
router.route("/get/address").get(isAuthenticatedUser, getUserShippingAddress);
router.route("/put/address/:id").put(isAuthenticatedUser, updateAddress);
// router.route("/get/address/:id").get(isAuthenticatedUser, getAddressById);

module.exports = router;
