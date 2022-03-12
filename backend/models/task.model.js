import { ObjectId } from 'mongodb';
import { generateTime } from '../Utils/index.js';
export default class Task {
    constructor(owner_id, content, deadline, status, label_id) {
        this.owner_id = ObjectId(owner_id);
        this.content = content;
        this.deadline = deadline;
        this.status = status;
        this.label_id = ObjectId(label_id);
        this.completed = false;
        this.softDelete = false;
        this.createdAt = generateTime();
        this.lastModified = generateTime();
    }
}
