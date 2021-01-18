import { connection } from "./index";
import { allUsers, task, user } from "./types";

//validação de dados do req.body
export function checkBody(req: string, propsError: string) {
  let Message = `(verifique o body) ausência da propriedade `;
  if (!req || req === undefined) {
    throw new Error(Message + propsError);
  }
}

//tabela de usuários
export async function createToDoListTable(): Promise<any> {
  try {
    await connection.raw(`
        CREATE TABLE TodoListUser (
          id VARCHAR(255) PRIMARY KEY,
          name VARCHAR(255) NULL,
          nickname VARCHAR(255) UNIQUE NOT NULL,
          email VARCHAR(255) UNIQUE NOT NULL
        );
      
      `);

    console.log("criou a tabela createToDoListTable");
  } catch (error) {
    console.log(error.sqlMessage || error.message);
  }
}
//tabela de tarefas
export async function createTodoListTask(): Promise<void> {
  try {
    await connection.raw(`
        CREATE TABLE TodoListTask (
          id VARCHAR(255) PRIMARY KEY,
          title VARCHAR(255) NOT NULL,
          description TEXT NOT NULL,
          status VARCHAR(255) NOT NULL DEFAULT "to_do",
          limite_date DATE NOT NULL,
          creator_user_id VARCHAR(255) NOT NULL,
          FOREIGN KEY (creator_user_id) REFERENCES TodoListUser(id)
        )
      `);
    console.log("criou a tabela createTodoListTask");
  } catch (error) {
    console.log(error.sqlMessage || error.message);
  }
}
//tabela da lista de responsável pela tarefa
export async function TodoListResponsibleUserTaskRelation(): Promise<void> {
  try {
    await connection.raw(`
            CREATE TABLE TodoListResponsibleUserTaskRelation (
                task_id VARCHAR(255),
                responsible_user_id VARCHAR(255),
                FOREIGN KEY (task_id) REFERENCES TodoListTask(id),
                FOREIGN KEY (responsible_user_id) REFERENCES TodoListUser(id)
            );
        
        `);
    console.log("criou a tabela TodoListResponsibleUserTaskRelation");
  } catch (error) {
    console.log(error.sqlMessage || error.message);
  }
}

export async function creatUser(user: user): Promise<void> {
  try {
    await connection.insert(user).into("TodoListUser");

    console.log("criou usuário com sucesso!");
  } catch (error) {
    throw new Error(error.sqlMessage || error.message);
  }
}
//pegar usuário por ID
export async function getUser(id: string): Promise<any> {
  try {
    const result = await connection
      .select("*")
      .from("TodoListUser")
      .where("id", `${id}`);

    return result;
  } catch (error) {
    throw new Error(error.sqlMessage || error.message);
  }
}
//editar usuário
export async function updateUser(
  name: string,
  nickname: string,
  id: string
): Promise<any> {
  try {
    const result = await connection("TodoListUser")
      .update({ name: name, nickname: nickname })
      .where("id", id);

    return result;
  } catch (error) {
    throw new Error(error.sqlMessage || error.message);
  }
}

//criar tarefa
export async function createTask(task: task) {
  try {
    console.log(task);
    await connection.insert(task).into("TodoListTask");

    console.log("tarefa criada com sucesso!");
  } catch (error) {
    throw new Error(error.sqlMessage || error.message);
  }
}

//pegar tarefa por id
export async function getTask(id: string): Promise<any> {
  try {
    const result = await connection
      .select("*")
      .from("TodoListTask")
      .where("id", `${id}`);

    return result;
  } catch (error) {
    throw new Error(error.sqlMessage || error.message);
  }
}

//pegar todos os usuários
export async function getUsers(): Promise<any> {
  try {
    const result = await connection
      .select("id", "nickname")
      .from("TodoListUser")
      const users = {users:result} 
      

    return users ;
  } catch (error) {
    throw new Error(error.sqlMessage || error.message);
  }
}
