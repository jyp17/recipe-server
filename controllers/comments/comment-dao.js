import commentModel from "./comment-model.js";

export const createComment = (comment) => commentModel.create(comment);
export const findCommentByAuthor = (username) => commentModel.find({author: username}).sort({date: -1});
export const findCommentByTopic = (tid) => commentModel.find({topicID: tid});
export const findRecentComments = () => commentModel.find().sort({date: -1}).limit(3);
export const updateComment = (cid, comment) => commentModel.findOneAndUpdate({_id: cid},
    {$set: comment}, {returnDocument: 'after'});
export const deleteComment = (cid) => commentModel.deleteOne({_id: cid});