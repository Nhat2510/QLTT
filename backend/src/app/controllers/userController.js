import User from "../modals/userModal.js";

class userClass {
    async getAllUSers(req, res) {
        try {
            const allUsers = await User.find({});
            res.status(200).json({ allUsers });
        } catch (error) {
            res.status(400).json({ error });
        }
    }

    async filterUsers(req, res) {
        try {
            const { role } = req.query;
            const users = await User.find({ role });
            res.status(200).json({ users });
        } catch (error) {
            res.status(400).json({ error });
        }
    }

    async updateInfoUser(req, res) {
        try {
            const { email } = req.params;
            const { sex, birthday, name, role } = req.body;
            const hasExisted = await User.findOne({ email });
            if (!hasExisted) return res.status(400).json({ message: "Invalid Email" });
            const response = await User.findOneAndUpdate({ email }, { sex, birthday, name, role });
            const newInfo = await User.find({ email });
            res.status(200).json({ newInfo });
        } catch (error) {
            res.status(400).json({ error });
        }
    }
}

const UserController = new userClass();
export default UserController;
