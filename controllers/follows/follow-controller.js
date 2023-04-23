import * as followDao from "./follow-dao.js";
const follow = async (req, res) => {
    const follower = req.params.follower;
    const followed = req.params.followed;
    const newFollow = await followDao.follow({follower: follower, followed: followed});
    res.json(newFollow);
}

const unfollow = async (req, res) => {
    const unfollower = req.params.follower;
    const unfollowed = req.params.followed;
    const deleted = await followDao.unfollow(unfollower, unfollowed);
    res.json(deleted);
}

const findAllFollows = async (req, res) => {
    const follows = await followDao.findAllFollows();
    res.json(follows);
}

const findFollow = async (req, res) => {
    const follower = req.params.follower;
    const followed = req.params.followed;
    const follow = await followDao.findFollowRelationship(follower, followed);
    res.json(follow);
}

const findByFollowers = async (req, res) => {
    const follower = req.params.username;
    const followers = await followDao.findByFollowers(follower);
    res.json(followers);
}

const findByFollowed = async (req, res) => {
    const followed = req.params.username;
    const followedList = await followDao.findByFollowed(followed);
    res.json(followedList);
}

export default (app) => {
    app.post('/api/follows/:follower/follows/:followed', follow);
    app.get('/api/follows', findAllFollows)
    app.get('/api/follows/:follower/follows/:followed', findFollow);
    app.get('/api/follows/follower/:username', findByFollowers);
    app.get('/api/follows/followed/:username', findByFollowed);
    app.delete('/api/follows/:follower/follows/:followed', unfollow);
}
