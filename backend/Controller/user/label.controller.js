import LabelServices from "../../services/user/label.service.js";

const LabelSv = new LabelServices();

export default class UserLabelController {
    async upLabel(req, res) {
        const { owner_id, name, hashColor } = req.body;
        const result = await LabelSv.upLabel(owner_id, name, hashColor);
        res.send(result);
    }
    async getLabel(req, res) {
        const { owner_id } = req.query;
        const result = await LabelSv.getLabel(owner_id);
        res.send(result);
    }
}
