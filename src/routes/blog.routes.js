import { Router } from "express";
import { blogDetailPage, createBlog, homePage , addComment, createBlogPage, blogSearch} from "../controllers/blog.controller.js";
import { upload } from "../middlewares/multer.middleware.js"
import multer from "multer";
const router = Router();
import { verifyJWT } from "../middlewares/auth.middleware.js";
// import { getBlogComments} from "../controllers/comments.controller.js";
import { checkUserAuth } from "../middlewares/user.middleware.js";


// router.route("/create").post(verifyJWT,
//     upload.single(
//         'thumbnail'
//     ),
//     createBlog);
router.route("/blogSearch").get(blogSearch);


router.route("/").get(checkUserAuth, homePage);
router.route("/blog").get(checkUserAuth, blogDetailPage);
router.route("/addComment").post(checkUserAuth, addComment);
router.route("/addBlog").get(checkUserAuth, createBlogPage);

router.route("/add").post(checkUserAuth, upload.single('thumbnail'), createBlog)

export default router;