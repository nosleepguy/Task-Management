import { ObjectId } from 'mongodb';
import { generateTime } from '../Utils/index.js';
export default class Label {
    constructor(owner_id, name, hashColor) {
        this.owner_id = ObjectId(owner_id);
        this.name = name;
        this.hashColor = hashColor;
        this.createdAt = generateTime();
        this.lastModified = generateTime();
        this.softDelete = false;
    }
}
