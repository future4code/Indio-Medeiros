import { PostOutputDTO } from "../../data/model/postModel";

export type InputCreatePostBusiness = {
  photo: string;
  description: string;
  type: string;
  token: string;
};
export type OuputPostByIdBusiness = {
  message: string;
  post: PostOutputDTO;
};
export type InputPostByIdBusiness = {
  id: string;
};
