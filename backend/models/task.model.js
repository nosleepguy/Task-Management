import { generateTime } from '../Utils/index.js';
export default class Task {
    constructor(content, deadline, status, label) {
        this.content = content;
        this.deadline = deadline;
        this.status = status;
        this.label = label;
        this.completed = false;
        this.createdAt = generateTime();
        this.lastModified = generateTime();
    }
}
