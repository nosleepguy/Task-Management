import UserLabelController from "../../Controller/user/label.controller.js";
const userLabelController = new UserLabelController();
export default [
    {
        method: 'post',
        route: '/api/user/label',
        controller: userLabelController,
        middleware: [],
        action: userLabelController.upLabel
    },
    {
        method: 'get',
        route: '/api/user/label',
        controller: userLabelController,
        middleware: [],
        action: userLabelController.getLabel
    },
    {
        method: 'delete',
        route: '/api/user/label',
        controller: userLabelController,
        middleware: [],
        action: userLabelController.deleteLabel
    },
    {
        method: 'put',
        route: '/api/user/label',
        controller: userLabelController,
        middleware: [],
        action: userLabelController.updateLabel
    }
]
