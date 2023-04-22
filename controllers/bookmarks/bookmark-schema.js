import mongoose from 'mongoose';

const schema = mongoose.Schema({
    topicID: String,
    topicTitle: String,
    user: String,
    date: {type: Date, default: Date.now}
}, {collection: 'bookmarks'});

export default schema;