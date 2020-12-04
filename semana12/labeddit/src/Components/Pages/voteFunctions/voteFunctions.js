import { vote } from "../../Elements/urls/requestsUrls";
import { requestPut } from "../../Requests/requests";

export const votePositivePost = (id,  votesCount, comment) => {
  const header = {
    Authorization: localStorage.getItem("token"),
  };
  let url = vote + `${id}` + `/vote`;
  if (comment) {
    url = vote + `${id}` + `comment/` + `${comment}` + `/vote`;
  }
  if (votesCount < 0) {
    const body = { direction: 0 };
    requestPut(url, body, header);
  } else if (votesCount >= 0) {
    const body = { direction: 1 };
    requestPut(url, body, header);
  }
};

export const voteNegaivePost = (id,  votesCount, comment) => {
  const header = {
    Authorization: localStorage.getItem("token"),
  };
  let url = vote + `${id}` + `/vote`;
  if (comment) {
    url = vote + `${id}` + `comment/` + `${comment}` + `/vote`;
  }
  if (votesCount > 0) {
    const body = { direction: 0 };
    requestPut(url, body, header);
  } else if (votesCount <= 0) {
    const body = { direction: -1 };
    requestPut(url, body, header);
  }
};
