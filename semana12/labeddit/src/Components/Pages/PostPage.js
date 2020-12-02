import React from "react";
import { useParams } from "react-router-dom";
import { useProtectedPage } from "../../Hooks/useProtectedPage";
import useRequestData from "../../Hooks/useRequestData";
import { getPostDetailUrl } from "../Elements/urls/requestsUrls";

export default function PostPage() {
  const params = useParams()
  useProtectedPage();

  
  return <div>
    {console.log("parametros", params.id)}
    <p>asa</p>
  </div>;
}
