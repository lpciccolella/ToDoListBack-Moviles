import { Request, Response } from 'express';

import Project from '../models/Project';

export const getProjectsByUser = async (req: any, res: Response) => {
    const { _id } = req.user;
    try {
        const projects= await Project.find({ userId: _id });
        return res.status(200).json({ status: 200, projects });
    } catch (e) {
        console.error(e);
        return res.status(500).json({ status: 500, message: 'Internal server error', error: e });
    };
};

export const getProjectsById = async (req: any, res: Response) => {
    const { id } = req.params;
    try {
        const project = await Project.findById(id);
        return res.status(200).json({ status: 200, project });
    } catch (e) {
        console.error(e);
        return res.status(500).json({ status: 500, message: 'Internal server error', error: e });
    };
};

export const createProject = async (req: any, res: Response) => {
    const { name,  userId, projectId } = req.body;
    const { _id } = req.user;
    try {
        const newProject = new Project({
            name,
            userId: _id,
            projectId

        });
        await newProject.save();
        return res.status(200).json({ status: 200, message: 'Project successfully created', project: newProject });
    } catch (e) {
        console.error(e);
        return res.status(500).json({ status: 500, message: 'Internal server error', error: e });
    };
};

export const updateProject = async (req: any, res: Response) => {
    const { name,  userId, projectId} = req.body;
    const { _id } = req.user;
    const { id } = req.params;
    try {
        const project = await Project.findByIdAndUpdate(id, {
            name,
            userId: _id,
            projectId
        }, { new: true });
        return res.status(200).json({ status: 200, message: 'Project successfully updated', project });
    } catch (e) {
        console.error(e);
        return res.status(500).json({ status: 500, message: 'Internal server error', error: e });
    };
};

export const deleteProject = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        await Project.findByIdAndDelete(id);
        return res.status(200).json({ status: 200, message: 'Project successfully deleted' });
    } catch (e) {
        console.error(e);
        return res.status(500).json({ status: 500, message: 'Internal server error', error: e });
    };
};