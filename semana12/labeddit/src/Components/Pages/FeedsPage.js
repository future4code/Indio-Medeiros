
import { useHistory } from "react-router-dom"
import { useProtectedPage } from "../../Hooks/useProtectedPage"
import useRequestData from "../../Hooks/useRequestData"
import { goToPagePost } from "../Coordination/coordinator"
import CardFeeds from "../Elements/CardFeeds"
import { getPostsUrl, vote } from "../Elements/urls/requestsUrls"
import { requestPut } from "../Requests/requests"





export default function FeedsPage () {
   const feeds = useRequestData(getPostsUrl)
   const history = useHistory()
   useProtectedPage()
   //colocar onClick pasando na função o id para o history
//    goToPagePost(history, feeds.id)
  const votePositivePost = (id) => {
    const header = {
        Authorization: localStorage.getItem("token")
      }
    const body = {
        direction: 1
    }
    const url = vote+`${id}`+`/vote`
    requestPut(url, body, header)
  }
  const voteNegaivePost = (id) => {
    const header = {
        Authorization: localStorage.getItem("token")
      }
    const body = {
        direction: -1
    }
    const url = vote+`${id}`+`/vote`
    requestPut(url, body, header)
  }
    return (
        <div>
           {feeds && feeds.posts.map((feed) => {
                return <CardFeeds
                key={feed.id}
                username={feed.username}
                title={feed.title}
                message={feed.text}
                favorite={feed.votesCount}
                commit={feed.commentsCount}
                votePositive={() => {votePositivePost(feed.id)}}
                voteNegative={() => {voteNegaivePost(feed.id)}}
                />
            })} 
            {feeds && console.log("feddpages", feeds.posts)}
            
        </div>

    )
}