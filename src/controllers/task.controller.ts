import { Request, Response } from 'express';

import Task from '../models/Task';

export const getTasksByUser = async (req: any, res: Response) => {
    const { _id } = req.user;
    try {
        const tasks = await Task.find({ userId: _id });
        return res.status(200).json({ status: 200, tasks });
    } catch (e) {
        console.error(e);
        return res.status(500).json({ status: 500, message: 'Internal server error', error: e });
    };
};

export const getTaskById = async (req: any, res: Response) => {
    const { id } = req.params;
    try {
        const task = await Task.findById(id);
        return res.status(200).json({ status: 200, task });
    } catch (e) {
        console.error(e);
        return res.status(500).json({ status: 500, message: 'Internal server error', error: e });
    };
};

export const createTask = async (req: any, res: Response) => {
    const { taskname, priority, date, time, pinned, userId, projectId } = req.body;
    const { _id } = req.user;
    try {
        const newTask = new Task({
            taskname,
            priority,
            date,
            time,
            pinned,
            userId: _id,
            projectId

        });
        await newTask.save();
        return res.status(200).json({ status: 200, message: 'Task successfully created', task: newTask });
    } catch (e) {
        console.error(e);
        return res.status(500).json({ status: 500, message: 'Internal server error', error: e });
    };
};

export const updateTask = async (req: any, res: Response) => {
    const { taskname, priority, date, time, pinned, userId, projectId} = req.body;
    const { _id } = req.user;
    const { id } = req.params;
    try {
        const task = await Task.findByIdAndUpdate(id, {
            taskname,
            priority,
            date,
            time,
            pinned,
            userId: _id,
            projectId
        }, { new: true });
        return res.status(200).json({ status: 200, message: 'Task successfully updated', task });
    } catch (e) {
        console.error(e);
        return res.status(500).json({ status: 500, message: 'Internal server error', error: e });
    };
};

export const deleteTask = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        await Task.findByIdAndDelete(id);
        return res.status(200).json({ status: 200, message: 'Task successfully deleted' });
    } catch (e) {
        console.error(e);
        return res.status(500).json({ status: 500, message: 'Internal server error', error: e });
    };
};