import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";
import { CardForm, Commit } from "./styledCardFeeds";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
}));

export default function CardFeeds(props) {
  const classes = useStyles();
  const history = useHistory();
  return (
    <CardForm className={classes.root}>
      <CardHeader title={props.username} />

      <CardContent>
        <Typography>{props.title}</Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.message}
        </Typography>
      </CardContent>
      <CardActions>
        <ThumbUpIcon onClick={props.votePositive} />
        <p>{props.favorite}</p>
        <ThumbDownIcon id={props.id} onClick={props.voteNegative} />

        {history.location.pathname === `/feeds` && props.commit !== 0 && (
          <Commit
            onClick={props.onClickCommit}
            variant="body2"
            color="textSecondary"
            component="p"
          >
            {props.commit} comentários
          </Commit>
        )}
      </CardActions>
    </CardForm>
  );
}
