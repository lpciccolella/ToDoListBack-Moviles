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
    author: {
        type: ObjectId,
        ref: 'users'
    }
});

export default model('Task', taskSchema);