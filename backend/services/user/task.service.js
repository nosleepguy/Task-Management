import { ObjectId } from 'mongodb';
import { PostError } from '../../common/error/index.js';
import Task from '../../models/task.model.js';
import { db } from '../../repositories/index.js';
import { responseError, responseSuccess } from '../../Utils/index.js';
export default class TaskServices {

    async upTask(owner_id, dataContent, deadline, status, label_id) {
        try {
            const newTask = new Task(owner_id, dataContent, deadline, status, label_id);
            await db.task.insertOne(newTask);
            return responseSuccess(newTask);
        } catch (error) {
            return responseError(error || PostError.POST_NOT_FOUND)
        }
    }
    async getAllTask(owner_id) {
        try {
            const tasks = await db.task.aggregate(
                [
                    {
                        '$match': {
                            'owner_id': ObjectId(owner_id),
                            'softDelete': false,
                            'completed': false
                        }
                    }, {
                        '$lookup': {
                            'from': 'label',
                            'localField': 'label_id',
                            'foreignField': '_id',
                            'as': 'labelData'
                        }
                    }, {
                        '$unwind': {
                            'path': '$labelData'
                        }
                    }, {
                        '$unset': [
                            'labelData.softDelete', 'labelData.lastModified', 'labelData.owner_id', 'label_id'
                        ]
                    }
                ]
            ).toArray();
            return responseSuccess(tasks);
        } catch (error) {
            return responseError(error || PostError.POST_NOT_FOUND)
        }
    }
    async completeTask(owner_id, task_id) {
        try {
            await db.task.updateOne({ '_id': ObjectId(task_id), 'owner_id': ObjectId(owner_id) }, { $set: { completed: true } });
            return responseSuccess();
        } catch (error) {
            return responseError(error || PostError.POST_NOT_FOUND)
        }
    }
    async deleteTask(task_id) {
        try {
            await db.task.updateOne({ '_id': ObjectId(task_id) }, { $set: { softDelete: true } });
            return responseSuccess();
        } catch (error) {
            return responseError(error || PostError.POST_NOT_FOUND)
        }
    }
}
