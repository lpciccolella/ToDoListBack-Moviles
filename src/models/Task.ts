import { Schema, model } from 'mongoose';
const { ObjectId } = Schema.Types;

const taskSchema = new Schema({
    task: {
        type: String,
        required: true
    },
    priority: {
        type: String
    },
    date: {
        type: Date
    },
    time: {
        type: String
    },
    pinned: {
        type: Boolean,
        default: false
    },
    userId: {
        type: ObjectId,
        ref: 'User'
    },
    projectId: {
        type: String,
        ref: 'Project'
    },
});

export default model('Task', taskSchema);