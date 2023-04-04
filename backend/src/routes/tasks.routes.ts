import HttpStatusCodes from '@src/constants/HttpStatusCodes';
import { taskRepository } from '@src/repos/task.repository';
import { Request, Response } from 'express';

const getAll = async (req: Request, res: Response) => {
  const tasks = await taskRepository.getAllTasks();
  return res.status(HttpStatusCodes.OK).json({ tasks });
};

const add = async (req: Request, res: Response) => {
  const newTask = req.body;
  await taskRepository.addTask(newTask);
  return res.status(HttpStatusCodes.CREATED).end();
};

const update = async (req: Request, res: Response) => {
  const taskId = parseInt(req.params.id);
  const taskData = req.body;
  return res.status(HttpStatusCodes.CREATED).json(await taskRepository.updateTask(taskId, taskData));
};

const delete_ = async (req: Request, res: Response) => {
  const taskId = parseInt(req.params.id);
  await taskRepository.deleteTask(taskId);
};


export default {
  getAll,
  add,
  update,
  delete: delete_,
} as const;
