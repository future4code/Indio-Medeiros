import React from "react";
import {
  goToPageReviewDay1,
  goToPageReviewDay2,
  goToPageReviewDay3,
  goToPageReviewDay4,
  goToPageReviewList,
} from "../Coordination/coordinator";
import { useHistory } from "react-router-dom";

export default function Header() {
  const history = useHistory();
  return (
    <div>
      <button onClick={() => goToPageReviewList(history)}>ReviewList</button>
      <button onClick={() => goToPageReviewDay1(history)}>Day 1</button>
      <button onClick={() => goToPageReviewDay2(history)}>Day 2</button>
      <button onClick={() => goToPageReviewDay3(history)}>Day 3</button>
      <button onClick={() => goToPageReviewDay4(history)}>Day 4</button>
    </div>
  );
}
