import { Router } from 'express';
import { schoolController } from '../controller/schoolsController';

export const schoolsRouter = Router();

schoolsRouter.get('/', schoolController.getAll);
schoolsRouter.post('/', schoolController.post);