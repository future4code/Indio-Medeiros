//POST-------------------------------------------

//cadastrar 
export const signupUlr =
  "https://us-central1-labenu-apis.cloudfunctions.net/labEddit/signup";
//logar
export const loginUrl =
  "https://us-central1-labenu-apis.cloudfunctions.net/labEddit/login";
//criar post
export const createPostUrl =
  "https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts";
//criar comentário
export const createCommentUrl =
  "https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts/:postId/comment";
//----------------------------------------------

//GET-------------------------------------------
//entrar no post
export const getPostsUrl =
  "https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts";
//listar todos os posts
export const getPostDetailUrl = `https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts/`;

//PUT-------------------------------------------
//vota em um feed
export const vote = `https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts/`;
