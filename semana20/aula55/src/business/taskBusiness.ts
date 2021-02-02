import {
  createTaskInputDTO,
  getTaskInputDTO,
  taskInputDataDTO,
} from "../data/model/task";
import { insertTask, selectTaskById } from "../data/taskDatabase";
import { task } from "./entities/task";
import { generateId } from "./services/idGenerator";

export const businessCreateTask = async (task: createTaskInputDTO) => {
  if (!task.title || !task.description || !task.deadline || !task.authorId) {
    throw new Error(
      '"title", "description", "deadline" e "authorId" são obrigatórios'
    );
  }

  const id: string = generateId();
  const taskInputData: taskInputDataDTO = { id: id, ...task };

  await insertTask(taskInputData);
};

export const businessGetTaskById = async (
  id: getTaskInputDTO
): Promise<task> => {
  const result = await selectTaskById(id);

  if (!result) {
    throw new Error("Tarefa não encontrada");
  }

  const taskWithUserInfo: task = {
    id: result.id,
    title: result.title,
    description: result.description,
    deadline: result.deadline,
    status: result.status,
    authorId: result.author_id,
    authorNickname: result.nickname,
  };

  return taskWithUserInfo;
};
