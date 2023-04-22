import bookmarkModel from "./bookmark-model.js";
export const createBookmark = (bookmark) => bookmarkModel.create(bookmark);
export const findRecentBookmarks = () => bookmarkModel.find().sort({date: -1}).limit(3);
export const findBookmarkByUser = (username) => bookmarkModel.find({user: username}).sort({date: -1});
export const findBookmarkByTopic = (tid) => bookmarkModel.find({topicID: tid});
export const deleteBookmark = (bid) => bookmarkModel.deleteOne({_id: bid});