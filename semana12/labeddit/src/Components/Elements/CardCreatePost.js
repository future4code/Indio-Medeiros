import React, { useEffect, useState } from "react";
import { requestPost } from "../Requests/requests";
import {
  DivFormCardPost,
  Textarea,
  ButtonCreatePost,
  InputTitle,
} from "./styledCardCreatePost";
import { createPostUrl } from "./urls/requestsUrls";

export default function CardCreatePost() {
  const [formPost, setFormPost] = useState("");

  useEffect(() => {}, [formPost]);
  const onSubmit = (event) => {
    event.preventDefault();
    const header = {
      Authorization: localStorage.getItem("token"),
    };
    requestPost(createPostUrl, formPost, header);
    setFormPost("");
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormPost({ ...formPost, [name]: value });
  };

  return (
    <DivFormCardPost onSubmit={onSubmit}>
      <InputTitle
        name="title"
        value={formPost.title}
        onChange={handleInputChange}
        require
        placeholder="Dê um título para sua criação"
      />
      <Textarea
        name="text"
        value={formPost.text}
        onChange={handleInputChange}
        require
        placeholder="compartilhe aqui as suas ideias"
      />
      <ButtonCreatePost>criar post</ButtonCreatePost>
    </DivFormCardPost>
  );
}
