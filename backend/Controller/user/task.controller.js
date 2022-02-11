import TaskServices from "../../services/user/task.service.js";

const TaskSv = new TaskServices();
export default class UserTaskController {
    async upTask(req, res) {
        const { owner_id, content, deadline, status, labelId } = req.body;
        const result = await TaskSv.upTask(owner_id, content, deadline, status, labelId);
        res.send(result);
    }
}
