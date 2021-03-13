import { Schema, model } from 'mongoose';
const { ObjectId } = Schema.Types;

const taskSchema = new Schema({
    taskname: {
        type: String,
        required: true
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
    }
});

export default model('Task', taskSchema);