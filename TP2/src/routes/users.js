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
        createWachtList,
        insertWachtList,
        deleteWatchList,
        favorisWatchList } = require("../controllers/users");



// Créé un utilisateur
router.post("/createUser", createUser)
// Récupérer la liste des utilisateurs
router.get("/userList", findMultipleUser)
// Insere un film dans la base watchlist
router.post("/addFilm", insertFilm)
// Créé une watchlist pour un utilisateur
router.post("/createWL", createWachtList)
// Insere un film la watchlist d'un utilisateur
router.post("/addFilmWL", insertWachtList)
// Supprimer une watchlist d'un utilisateur
router.post("/deleteWL", deleteWatchList)
// Ajouter une WatchList en favoris
router.post("/favorisWL", favorisWatchList)



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