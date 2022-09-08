import React, { memo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import ShowAlert from "../../components/ShowAlert/ShowAlert";
import Loader from "../../components/Loader/Loader";
import MainCard from "../../components/MainCard/MainCard";
import { NEWS_WARNING } from "../../constants";
import { fetchNews } from "../../redux/actions/news";

import { useStyles } from "./style";

const MainPage = () => {
  const classes = useStyles();

  const dispatch = useDispatch();
  const { news, error, isLoading } = useSelector((state) => state.news);

  useEffect(() => {
    dispatch(fetchNews());
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return (
      <div className={classes.container}>
        <ShowAlert severity="error" message={error.message} />
      </div>
    );
  }
  return (
    <div className={classes.wrapper}>
      {news.length ? (
        news.map((news) => (
          <MainCard title={news.title} content={news.content} key={news.id} />
        ))
      ) : (
        <div className={classes.container}>
          <ShowAlert severity="warning" message={NEWS_WARNING} />
        </div>
      )}
    </div>
  );
};

export default memo(MainPage);
