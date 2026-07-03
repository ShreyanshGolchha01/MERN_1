import express from "express";
import multer from "multer";
import uploadImageToImageKit from "./services/storage.service.js";
import Post from "./models/post.model.js";
const app = express();
app.use(express.json());

const upload = multer({storage: multer.memoryStorage()});
app.post("/create-post", upload.single("image"), async (req, res) => {
    try {
        const imageUrl = await uploadImageToImageKit(req.file);
        console.log("Image uploaded successfully:", imageUrl);
        const newPost = new Post({
            image: imageUrl,
            caption: req.body.caption,
        })
        await newPost.save();
        res.status(201).json({ message: "Post created successfully", post: newPost });
        
    } catch (error) {
        console.error("Error creating post:", error);
        res.status(500).json({ message: "Error creating post" });
    }
});
app.get("/posts", async (req, res) => {
    try {
        const posts = await Post.find();
        res.status(200).json({ message: "Posts fetched successfully", posts });
    } catch (error) {
        console.error("Error fetching posts:", error);
        res.status(500).json({ message: "Error fetching posts" });
    }
});
export default app;