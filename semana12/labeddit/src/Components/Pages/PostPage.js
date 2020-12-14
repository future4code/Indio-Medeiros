import React from "react";
import { useParams } from "react-router-dom";
import { useProtectedPage } from "../../Hooks/useProtectedPage";
import useRequestData from "../../Hooks/useRequestData";
import CardFeeds from "../Elements/CardFeeds";
import { getPostDetailUrl } from "../Elements/urls/requestsUrls";
import { DivFeeds } from "./styledFeedPage";
import { DivPostPage, H2 } from "./styledPostPage";
import {
  voteNegaivePost,
  votePositivePost,
} from "./voteFunctions/voteFunctions";
import { LabEddit } from "./styledPagesForm";
import labEddit from "../../img/labeddit.png";

export default function PostPageDetals() {
  const params = useParams();
  const [postDetails, setPostDetails] = useRequestData(
    getPostDetailUrl + params.id
  );
  useProtectedPage();

  const refreshVotePositivePost = (id, comment, vote) => {
    votePositivePost(id, comment, vote);
    setPostDetails(postDetails);
  };
  const refreshVoteNegativePost = (id, comment, vote) => {
    voteNegaivePost(id, comment, vote);
    setPostDetails(postDetails);
  };

  return (
    <DivFeeds>
      {!postDetails && <LabEddit src={labEddit} />}
      <DivPostPage>
        {postDetails && (
          <CardFeeds
            key={postDetails.post.id}
            username={postDetails.post.username}
            title={postDetails.post.title}
            message={postDetails.post.text}
            favorite={postDetails.post.votesCount}
          />
        )}
        {postDetails && (
          <H2>Comentários no post de {postDetails.post.username}</H2>
        )}
      </DivPostPage>

      <DivFeeds>
        {postDetails &&
          postDetails.post.comments.map((comment) => {
            return (
              <CardFeeds
                key={comment.id}
                username={comment.username}
                title={comment.title}
                message={comment.text}
                favorite={comment.votesCount}
                votePositive={() => {
                  refreshVotePositivePost(
                    postDetails.post.id,
                    comment.id,
                    comment.votesCount
                  );
                }}
                voteNegative={() => {
                  refreshVoteNegativePost(
                    postDetails.post.id,
                    comment.id,
                    comment.votesCount
                  );
                }}
              />
            );
          })}
      </DivFeeds>
    </DivFeeds>
  );
}
