import * as bookmarkDao from "./bookmark-dao.js";

const createBookmark = async (req, res) => {
    const newBk = req.body;
    const bookmark = await bookmarkDao.createBookmark(newBk);
    res.json(bookmark);
}

const findBookmarkByUser = async (req, res) => {
    const user = req.params.username;
    const bookmarks = await bookmarkDao.findBookmarkByUser(user);
    res.json(bookmarks);
}

const findBookmarkByTopic = async (req, res) => {
    const topic = req.params.tid;
    const comments = await bookmarkDao.findBookmarkByTopic(topic);
    res.json(comments);
}
const findRecentBookmarks = async (req, res) => {
    const bookmarks = await bookmarkDao.findRecentBookmarks();
    res.json(bookmarks);
}
const deleteBookmark = async (req, res) => {
    const bookmarkToDelete = req.params.bid;
    const status = await bookmarkDao.deleteBookmark(bookmarkToDelete);
    res.sendStatus(200);
}

export default (app) => {
    app.post('/api/bookmarks', createBookmark);
    app.get('/api/bookmarks/user/:username', findBookmarkByUser);
    app.get('/api/bookmarks/topic/:tid', findBookmarkByTopic);
    app.get('/api/bookmarks/recent', findRecentBookmarks);
    app.delete('/api/bookmarks/:bid', deleteBookmark);
}