export type user = {
  id: string;
  name: string;
  nickname: string;
  email: string;
};

export type task = {
  id: string;
  title: string;
  description: string;
  limite_date: any;
  creator_user_id: string;
};
