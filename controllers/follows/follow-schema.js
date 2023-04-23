import mongoose from "mongoose";

const schema = mongoose.Schema({
    follower: String,
    followed: String,
    date: {type: Date, default: Date.now}
}, {collection: 'follows'});
export default schema;