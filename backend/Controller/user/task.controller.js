import TaskServices from "../../services/user/task.service.js";

const TaskSv = new TaskServices();
export default class UserTaskController {
    async upTask(req, res) {
        const { owner_id, content, deadline, status, label } = req.body;
        const result = await TaskSv.upPost(owner_id, content, deadline, status, label);
        res.send(result);
    }
}
