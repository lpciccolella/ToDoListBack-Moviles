import { Schema, model } from 'mongoose';
const { ObjectId } = Schema.Types;

const projectSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    projectId: {
        type: ObjectId
    },
    userId: {
        type: String,
        ref: 'User'
    }
});

export default model('Project', projectSchema);