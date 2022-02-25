import { ObjectId } from 'mongodb';
import { LabelError } from '../../common/error/index.js';
import { db } from '../../repositories/index.js';
import { responseError, responseSuccess } from '../../Utils/index.js';
import Label from '../../models/label.model.js';

export default class LabelServices {

    async upLabel(owner_id, name, hashColor) {
        try {
            const newLabel = new Label(owner_id, name, hashColor);
            await db.label.insertOne(newLabel);
            return responseSuccess(newLabel);
        } catch (error) {
            return responseError(error || LabelError.LALEB_NOT_FOUND)
        }
    }
    async getLabel(owner_id) {
        try {
            const result = await db.label.aggregate([
                {
                    '$match': {
                        'owner_id': new ObjectId(`${owner_id}`)
                    }
                }, {
                    '$unset': [
                        'createdAt', 'lastModified', 'softDelete'
                    ]
                }
            ]).toArray();
            return responseSuccess(result);
        } catch (error) {
            return responseError(error || LabelError.LALEB_NOT_FOUND)
        }
    }
    async deleteLabel(owner_id, label_id) {
        let checkTask = await db.task.find({ 'label_id': label_id }).toArray();
        if (checkTask.length > 0) {
            return responseError(LabelError.POST_EXISTED);
        } else {
            try {
                await db.label.deleteOne({ '_id': new ObjectId(label_id), 'owner_id': new ObjectId(owner_id) });
                return responseSuccess();
            } catch (error) {
                return responseError(error || LabelError.LALEB_NOT_FOUND)
            }
        }
    }
    async updateLabel(owner_id, label_id, name, hashColor) {
        try {
            await db.label.updateOne({ '_id': new ObjectId(label_id), 'owner_id': new ObjectId(owner_id) }, { $set: { name: name, hashColor: hashColor } });
            return responseSuccess();
        } catch (error) {
            return responseError(error || LabelError.LALEB_NOT_FOUND)
        }
    }
}
