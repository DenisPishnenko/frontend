import React from "react";
import { memo } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ShowAlert from "../../components/Alert/ShowAlert";

import Loader from "../../components/Loader/Loader";
import MainCard from "../../components/MainCard/MainCard";
import { fetchNews } from "../../redux/actions/news";

import { useStyles } from "./style";

const MainPage = () => {
  const classes = useStyles();

  const dispatch = useDispatch();
  const {
    news: fetchedNews,
    error,
    isLoading,
  } = useSelector((state) => state.newsReducer);

  useEffect(() => {
    dispatch(fetchNews());
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return (
      <div className={classes.container}>
        <ShowAlert severity="error" message="Error" />
      </div>
    );
  }
  return (
    <>
      <div className={classes.wrapper}>
        {fetchedNews.length ? (
          fetchedNews.length &&
          fetchedNews.map((news) => (
            <MainCard title={news.title} content={news.content} key={news.id} />
          ))
        ) : (
          <div className={classes.container}>
            <ShowAlert severity="warning" message="There is no news yet" />
          </div>
        )}
      </div>
    </>
  );
};

export default memo(MainPage);
