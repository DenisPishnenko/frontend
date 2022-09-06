import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  container: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexWrap: "wrap",
  },
  root: {
    width: 350,
    height: 250,
    marginTop: "10vh",
    margin: "auto",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
  },
  content: {
    fontSize: 16,
  },
});

const MainCard = ({ news }) => {
  const classes = useStyles();
  return news.map((item) => (
    <Card className={classes.root} key={item.id}>
      <CardContent>
        <Typography className={classes.title} variant="h5" component="h2">
          {item.title}
        </Typography>
        <Typography className={classes.content} variant="body2" component="p">
          {item.content}
        </Typography>
      </CardContent>
    </Card>
  ));
};

export default MainCard;
