const express = require("express");
const router = express.Router();
const { createUser, 
        findUser, 
        findMultipleUser, 
        insertOneUser, 
        insertManyUser, 
        updateOneUser, 
        updateManyUser, 
        replaceUser, 
        deleteOneUser, 
        deleteManyUser,
        insertFilm,
        createWachtList } = require("../controllers/users");



// Créé un utilisateur
router.post("/createUser", createUser)
// Pour regarder si ils existent
router.get("/userList", findMultipleUser)
// Insere un film dans la base watchlist
router.post("/addFilm", insertFilm)
// Créé une watchlist pour un utilisateur
router.post("/createWL", createWachtList)

// J'utiliserai plus tard ces fonctions

// router.get("/create", createUser);
// router.get("/findOne", findUser);
// router.get("/insertOne", insertOneUser);
// router.get("/insertMany", insertManyUser);
// router.get("/update", updateOneUser);
// router.get("/updateMany", updateManyUser);
// router.get("/replace", replaceUser);
// router.get("/deleteOne", deleteOneUser);
// router.get("/deleteMany", deleteManyUser);



module.exports = router;
