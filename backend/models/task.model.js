import { ObjectId } from 'mongodb';
import { generateTime, generateKeyString, slug } from '../Utils/index.js';
export default class Task {
    constructor(owner_id, content, deadline, status, label) {
        this.owner_id = new ObjectId(owner_id);
        this.content = content;
        this.deadline = deadline;
        this.status = status;
        this.label = label;
        this.createdAt = generateTime();
        this.lastModified = generateTime();
        this.slug = slug(title) + "-" + generateKeyString();
    }
}
