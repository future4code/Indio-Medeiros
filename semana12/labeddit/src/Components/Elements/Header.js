import React from "react";
import { useHistory } from "react-router-dom";
import {
  goToPageFeeds,
  goToPageSignup,
  goToPagePost,
  goToPageLogin,
} from "../Coordination/coordinator";

export default function Header() {
  const history = useHistory();

  return (
    <div>
      <button
        onClick={() => {
          goToPageFeeds(history);
        }}
      >
        {" "}
        Ir para Feeds
      </button>
      <button
        onClick={() => {
          goToPageLogin(history);
        }}
      >
        {" "}
        Ir para Login
      </button>
      <button
        onClick={() => {
          goToPageSignup(history);
        }}
      >
        {" "}
        Ir para Singup
      </button>
      <button
        onClick={() => {
          goToPagePost(history);
        }}
      >
        {" "}
        Ir para Post
      </button>
    </div>
  );
}
