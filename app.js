import express from 'express';
import session from "express-session";
import cors from 'cors';
import mongoose from 'mongoose';
import CommentController from "./controllers/comments/comment-controller.js";
import AuthController from "./controllers/users/auth-controller.js";
import BookmarkController from "./controllers/bookmarks/bookmark-controller.js";
import FollowController from "./controllers/follows/follow-controller.js";

const CONNECTION_STRING = process.env.DB_CONNECTION_STRING;
mongoose.connect(CONNECTION_STRING);
const app = express();

app.use(cors({
        credentials: true,
        origin: "http://localhost:3000",
    }
));
app.use(express.json());
app.use(
    session({
        secret: "refrigerator",
        resave: false,
        saveUninitialized: true,
    })
);

AuthController(app);
CommentController(app);
BookmarkController(app);
FollowController(app);

app.listen(process.env.PORT || 4000);