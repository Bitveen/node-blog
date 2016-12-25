/* Роутер для постов */

const express = require("express");
const router = express.Router();
const PostController = require("../controllers/PostController");

router.get("/", PostController.index);
router.get("/post/create", PostController.create);
router.get("/post/:postSlug", PostController.show);


router.post("/post", PostController.store);
router.post("/post/:postId", PostController.update);
router.delete("/post/:postId", PostController.delete);


module.exports = router;