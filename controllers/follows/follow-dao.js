import followModel from "./follow-model.js";

export const follow = (newFollow) => followModel.create(newFollow);
export const unfollow = (follower, followed) => followModel
    .findOneAndDelete({follower: follower, followed: followed}, {returnDocument: 'after'});

export const findAllFollows = () => followModel.find();

export const findFollowRelationship = (follower, followed) => followModel.findOne({follower, followed});

export const findByFollowers = (follower) => followModel.find({follower});

export const findByFollowed = (followed) => followModel.find({followed});