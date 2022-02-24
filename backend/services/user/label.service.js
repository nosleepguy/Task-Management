import { ObjectId } from 'mongodb';
import { PostError } from '../../common/error/index.js';
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
            return responseError(error || PostError.POST_NOT_FOUND)
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
            return responseError(error || PostError.POST_NOT_FOUND)
        }
    }
}
