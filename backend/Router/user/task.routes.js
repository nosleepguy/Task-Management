import UserTaskController from "../../Controller/user/task.controller.js"
import { Authorization } from "../../middleware/authorization.js";

const userTaskController = new UserTaskController();
export default [
    {
        method: 'post',
        route: '/api/user/tasks',
        controller: userTaskController,
        middleware: [Authorization],
        action: userTaskController.upTask
    },
    {
        method: 'get',
        route: '/api/user/tasks',
        controller: userTaskController,
        middleware: [Authorization],
        action: userTaskController.getAllTask
    },
    // {
    //     method: 'get',
    //     route: '/api/user/post/detail',
    //     controller: userTaskController,
    //     middleware: [],
    //     action: userTaskController.getDetailPost
    // },
    // {
    //     method: 'post',
    //     route: '/api/user/comment',
    //     controller: userTaskController,
    //     middleware: [Authorization],
    //     action: userTaskController.upComment
    // }
]
