const express = require("express")
const { signup, login, addblog, getAllblog, getauthorblogs, deleteblog, editBlog, setblog } = require("../controllers/backend-controllers")
const router = express.Router()



router.post("/signup", signup)
router.post("/login", login)
router.post("/addblog", addblog)
router.get("/getallblog", getAllblog)
router.get("/getauthorblog/:id", getauthorblogs)
router.delete("/delete-blog/:id", deleteblog)
router.patch("/editblog/:id", editBlog)
router.get("/sortblog/:category", setblog)

module.exports = router