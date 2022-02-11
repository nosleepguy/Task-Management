import { generateTime } from '../Utils/index.js';
export default class Task {
    constructor(owner_id, content, deadline, status, labelId) {
        this.owner_id = owner_id;
        this.content = content;
        this.deadline = deadline;
        this.status = status;
        this.labelId = labelId;
        this.completed = false;
        this.createdAt = generateTime();
        this.lastModified = generateTime();
    }
}
