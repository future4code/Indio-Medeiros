import {connection} from "./index"

//tabela de usuários
export async function createToDoListTable(): Promise<void> {
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
