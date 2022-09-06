import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ShowAlert from "../../components/Alert/Alert";
import { makeStyles } from "@material-ui/core/styles";

import Header from "../../components/Header/Header";
import Loader from "../../components/Loader/Loader";
import MainCard from "../../components/MainCard/MainCard";
import { fetchNews } from "../../redux/actions/fetchNews";

const useStyles = makeStyles({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  wrapper: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexWrap: "wrap",
  },
});

const MainPage = () => {
  const classes = useStyles();

  const dispatch = useDispatch();
  const fetchedNews = useSelector((state) => state.newsState.news);
  const error = useSelector((state) => state.newsState.error);
  const isLoading = useSelector((state) => state.newsState.isLoading);

  useEffect(() => {
    dispatch(fetchNews());
  }, []);

  if (isLoading) {
    return (
      <>
        <Loader />
      </>
    );
  }

  if (error) {
    return (
      <div className={classes.container}>
        <ShowAlert value={"error"} message={error.message} />
      </div>
    );
  }
  return (
    <>
      <Header />
      <div className={classes.wrapper}>
        {fetchedNews.length &&
          fetchedNews.map((news) => (
            <MainCard title={news.title} content={news.content} key={news.id} />
          ))}
      </div>
    </>
  );
};

export default MainPage;
