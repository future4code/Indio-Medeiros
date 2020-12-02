import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";

import Typography from "@material-ui/core/Typography";
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';

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

  return (
    <Card  className={classes.root}>
      <CardHeader
        onClick={() => {
          console.log("entrei");
        }}
        title={props.username}
      />

      <CardContent>
          <Typography>{props.title}</Typography>
        <Typography
          variant="body2"
          color="textSecondary"
          component="p"
        >
          {props.message}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
          <ThumbDownIcon id={props.id} onClick={props.voteNegative}/>
          <p>{props.favorite}</p>
          <ThumbUpIcon
            onClick={props.votePositive}
          />
        

        <Typography variant="body2" color="textSecondary" component="p">
        {props.commit} comentários
        </Typography>
      </CardActions>
    </Card>
  );
}
