import TaskServices from "../../services/user/task.service.js";

const TaskSv = new TaskServices();
export default class UserTaskController {
    async upTask(req, res) {
        const { owner_id, content, deadline, status, label_id } = req.body;
        const result = await TaskSv.upTask(owner_id, content, deadline, status, label_id);
        res.send(result);
    }
    async getAllTask(req, res) {
        const { owner_id } = req.query;
        const result = await TaskSv.getAllTask(owner_id);
        res.send(result);
    }
}
