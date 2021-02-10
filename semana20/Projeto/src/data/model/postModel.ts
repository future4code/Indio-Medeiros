export type PostInputDTO = {
    id: string;
    photo: string;
    description: string;
    type: POST_TYPES;
    author_id: string;
}
export type PostOutputDTO = {
    id: string;
    photo: string;
    description: string;
    type: POST_TYPES;
    createdAt: Date;
    author_id: string;
}

export enum POST_TYPES {
    NORMAL = "normal",
    EVENT = "event",
  }



