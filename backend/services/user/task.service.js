import { ObjectId } from 'mongodb';
import { PostError } from '../../common/error/index.js';
import { db } from '../../repositories/index.js';
import { responseError, responseSuccess } from '../../Utils/index.js';
import Task from '../../models/task.model.js';
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
                            'owner_id': ObjectId(owner_id)
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
}
