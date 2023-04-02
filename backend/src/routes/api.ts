import { Router } from 'express';

import Paths from './constants/Paths';
import TaskRoutes from './tasks.routes';

const apiRouter = Router()

const taskRouter = Router();

taskRouter.get(
  Paths.Tasks.Get,
  TaskRoutes.getAll,
);

taskRouter.post(
  Paths.Tasks.Add,
  TaskRoutes.add,
);

taskRouter.put(
  Paths.Tasks.Update,
  TaskRoutes.update,
);

taskRouter.delete(
  Paths.Tasks.Delete,
  TaskRoutes.delete,
);

apiRouter.use(Paths.Tasks.Base, taskRouter);

export default apiRouter;
