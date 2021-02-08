export type createTaskInputDTO = {
         title: string ,
         description: string,
         deadline: string,
         authorId: string
}

export type taskInputDataDTO = {
    id: string,
    title: string ,
    description: string,
    deadline: string,
    authorId: string
}

export type getTaskInputDTO = {
    id: string
}