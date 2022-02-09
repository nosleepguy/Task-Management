import UserServices from "../../services/user/user.service.js";
const UserSv = new UserServices();

export default class UserController {
    async login(req, res) {
        const { email, password } = req.body;
        const result = await UserSv.login(email, password);
        res.send(result);
    }
    async register(req, res) {
        const { email, password } = req.body;
        const result = await UserSv.register(email, password);
        res.send(result);
    }
    async verify(req, res) {
        const { token } = req.query;
        const result = await UserSv.verify(token);
        res.send(result);
    }
    async refreshToken(req, res) {
        const { refreshToken } = req.body;
        const result = await UserSv.refreshToken(refreshToken);
        res.send(result);
    }
    async getUserData(req, res) {
        const { email } = req.query;
        const result = await UserSv.getUserData(email);
        res.send(result)
    }
    async getActivities(req, res) {
        const { id } = req.query;
        const result = await UserSv.getActivities(id);
        res.send(result);
    }
    async getMyPostPublished(req, res) {
        const { id } = req.query;
        const page = Number(req.query.page) - 1;
        const limit = Number(req.query.limit);
        const result = await UserSv.getMyPostPublished(id, page, limit);
        res.send(result);
    }
}
