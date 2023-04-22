import * as userDao from "./user-dao.js";

const AuthController = (app) => {
    const register = async (req, res) => {
        const username = req.body.username;
        const user = await userDao.findUserByUsername(username);
        if (user) {
            res.sendStatus(409);
            return;
        }
        const newUser = await userDao.createUser(req.body);
        req.session["currentUser"] = newUser;
        res.json(newUser);
    };
    const login = async (req, res) => {
        const username = req.body.username;
        const password = req.body.password;
        const user = await userDao.findUserByCredentials(username, password);
        if (user) {
            req.session["currentUser"] = user;
            res.json(user);
        } else {
            res.sendStatus(409);
        }
    };
    const getUser = async (req, res) => {
        const user = await userDao.findUserById(req.params.uid);
        res.json(user);
    };
    const getAllUsers = async (req, res) => {
      const users = await userDao.findAllUsers();
      res.json(users);
    };
    const getUserByUsername = async (req, res) => {
        const user = await userDao.findUserByUsername(req.params.username);
        res.json(user);
    };
    const logout = async (req, res) => {
        req.session.destroy();
        res.sendStatus(200);
    };
    const update = async (req, res) => {
        const userToUpdate = req.params.uid;
        const updates = req.body;
        const newInfo = await userDao.updateUser(userToUpdate, updates);
        res.json(newInfo);
    };

    app.post("/api/users/register", register);
    app.post("/api/users/login", login);
    app.get("/api/users", getAllUsers);
    app.get("/api/users/:uid", getUser);
    app.get("/api/users/name/:username", getUserByUsername);
    app.post("/api/users/logout", logout);
    app.put ("/api/users/:uid", update);
};
export default AuthController;