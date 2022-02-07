import { ObjectId } from 'mongodb';
import { PostError } from '../../common/error/index.js';
import { db } from '../../repositories/index.js';
import { responseError, responseSuccess } from '../../Utils/index.js';
import Task from '../../models/task.model.js';
export default class TaskServices {

    async upTask(owner_id, content, deadline, status, label) {
        try {
            const newTask = new Task(owner_id, content, deadline, status, label);
            await db.task.insertOne(newTask);
            return responseSuccess(newTask);
        } catch (error) {
            return responseError(error || PostError.POST_NOT_FOUND)
        }
    }
}
