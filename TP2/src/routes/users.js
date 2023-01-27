const express = require("express");
const router = express.Router();
const { createUser, findUser, findMultipleUser, insertOneUser, insertManyUser, updateOneUser, updateManyUser } = require("../controllers/users");

router.get("/create", createUser);
router.get("/findOne", findUser);
router.get("/findMult", findMultipleUser);
router.get("/insertOne", insertOneUser);
router.get("/insertMany", insertManyUser);
router.get("/updateOne", updateOneUser);
router.get("/updateMany", updateManyUser);



module.exports = router;
