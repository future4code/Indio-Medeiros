import { useHistory } from "react-router-dom";
import { useProtectedPage } from "../../Hooks/useProtectedPage";
import useRequestData from "../../Hooks/useRequestData";
import CardCreatePost from "../Elements/CardCreatePost";
import CardFeeds from "../Elements/CardFeeds";
import { getPostsUrl } from "../Elements/urls/requestsUrls";
import {
  voteNegaivePost,
  votePositivePost,
} from "./voteFunctions/voteFunctions";
import { DivFeeds } from "./styledFeedPage";
import { goToPagePost } from "../Coordination/coordinator";
import { LabEddit } from "./styledPagesForm";
import labEddit from "../../img/labeddit.png";

export default function FeedsPage() {
  const [feeds, setFeeds] = useRequestData(getPostsUrl);
  const history = useHistory();
  useProtectedPage();

  const refreshVotePositivePost = (id, vote) => {
    votePositivePost(id, vote);
    setFeeds(feeds);
  };
  const refreshVoteNegativePost = (id, vote) => {
    voteNegaivePost(id, vote);
    setFeeds(feeds);
  };

  return (
    <DivFeeds>
      {feeds && <CardCreatePost />}
      <DivFeeds>
        {!feeds && <LabEddit src={labEddit} />}
        {feeds &&
          feeds.posts.map((feed) => {
            return (
              <CardFeeds
                key={feed.id}
                username={feed.username}
                title={feed.title}
                message={feed.text}
                favorite={feed.votesCount}
                commit={feed.commentsCount}
                votePositive={() => {
                  refreshVotePositivePost(feed.id, feed.votesCount);
                }}
                voteNegative={() => {
                  refreshVoteNegativePost(feed.id, feed.votesCount);
                }}
                onClickCommit={() => goToPagePost(history, feed.id)}
              />
            );
          })}
      </DivFeeds>
    </DivFeeds>
  );
}
