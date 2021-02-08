import { Request, Response } from "express";
import {
  businessCreateTask,
  businessGetTaskById,
} from "../business/taskBusiness";
import { createTaskInputDTO, getTaskInputDTO } from "../data/model/task";

export const getTaskById = async (req: Request, res: Response) => {
  try {
    const id: getTaskInputDTO = { id: req.params.id as string };

    const taskWithUserInfo = await businessGetTaskById(id);

    res.status(200).send(taskWithUserInfo);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const createTask = async (req: Request, res: Response) => {
  try {
    const task: createTaskInputDTO = {
      title: req.body.title,
      description: req.body.description,
      deadline: req.body.deadline,
      authorId: req.body.authorId,
    };

    await businessCreateTask(task);

    res.status(201).end();
  } catch (error) {
    res.statusMessage = error.message;
    res.status(500).end();
  }
};
