import * as commentDao from './comment-dao.js';
const createComment = async (req, res) => {
    const newComment = req.body;
    const insertedComment = await commentDao.createComment(newComment);
    res.json(insertedComment);
}
const findCommentByAuthor = async (req, res) => {
    const commentAuthor = req.params.username;
    const comments = await commentDao.findCommentByAuthor(commentAuthor);
    res.json(comments);
}

const findCommentByTopic = async (req, res) => {
    const topic = req.params.tid;
    const comments = await commentDao.findCommentByTopic(topic);
    res.json(comments);
}

const findRecentComments = async (req,res) => {
    const comments = await commentDao.findRecentComments();
    res.json(comments);
}

const updateComment = async (req, res) => {
    const commentToUpdate = req.params.cid;
    const updates = req.body;
    const newComment = await commentDao.updateComment(commentToUpdate, updates);
    res.json(newComment);
}
const deleteComment = async (req, res) => {
    const commentToDelete = req.params.cid;
    const status = await commentDao.deleteComment(commentToDelete);
    res.sendStatus(200);
}

export default (app) => {
    app.post('/api/comments', createComment);
    app.get('/api/comments/author/:username', findCommentByAuthor);
    app.get('/api/comments/topic/:tid', findCommentByTopic);
    app.get('/api/comments/recent', findRecentComments)
    app.put('/api/comments/:cid', updateComment);
    app.delete('/api/comments/:cid', deleteComment);
}