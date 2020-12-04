import React from "react";
import { useParams } from "react-router-dom";
import { useProtectedPage } from "../../Hooks/useProtectedPage";
import useRequestData from "../../Hooks/useRequestData";
import CardFeeds from "../Elements/CardFeeds";
import { getPostDetailUrl } from "../Elements/urls/requestsUrls";
import { voteNegaivePost, votePositivePost } from "./voteFunctions/voteFunctions";

export default function PostPageDetals() {
  const params = useParams();
  const [postDetails, setPostDetails] = useRequestData(
    getPostDetailUrl + params.id
  );
  useProtectedPage();

const refreshVotePositivePost = (id, comment, vote) => {
    votePositivePost(id, comment, vote)
    setPostDetails(postDetails)
}
const refreshVoteNegativePost = (id, comment , vote) => {
    voteNegaivePost(id, comment, vote) 
    setPostDetails(postDetails)
}

  return (
    <div>
       {postDetails &&
        postDetails.post.comments.map((comment) => {
          return <CardFeeds
          key={comment.id}
          username={comment.username}
          title={comment.title}
          message={comment.text}
          favorite={comment.votesCount}
          votePositive={() => {refreshVotePositivePost(postDetails.post.id, comment.id, comment.votesCount)}}
          voteNegative={() => {refreshVoteNegativePost (postDetails.post.id, comment.id, comment.votesCount)}}
          />;
        })} 
      { postDetails && console.log("parametros", postDetails.post.comments[0].votesCount)}

      <p>asa</p>
    </div>
  );
}
