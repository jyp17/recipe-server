import mongoose from 'mongoose';

const schema = mongoose.Schema({
    topicID: String,
    topicTitle: String,
    author: String,
    comment: String,
    date: {type: Date, default: Date.now}
}, {collection: 'comments'});

export default schema;