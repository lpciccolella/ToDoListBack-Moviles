  import { Router } from 'express';
const router = Router();

import passport from 'passport';

import { createProject, deleteProject, getProjectsByUser, getProjectsById, updateProject } from '../controllers/project.controller';

router.route('/project')
    .get(passport.authenticate('jwt', { session: false }), getProjectsByUser)
    .post(passport.authenticate('jwt', { session: false }), createProject)

router.route('/project/:id')
    .get(passport.authenticate('jwt', { session: false }), getProjectsById)
    .put(passport.authenticate('jwt', { session: false }), updateProject)
    .delete(passport.authenticate('jwt', { session: false }), deleteProject)

export default router;