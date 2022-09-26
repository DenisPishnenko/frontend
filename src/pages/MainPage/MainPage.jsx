import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ShowAlert from '../../components/ShowAlert/ShowAlert';
import Loader from '../../components/Loader/Loader';
import MainCard from '../../components/MainCard/MainCard';
import { NEWS_WARNING } from '../../constants';
import { fetchNews } from '../../redux/actions/news';

import useStyles from './style';

function MainPage() {
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
        news.map(({
          title,
          content,
          user,
          tag,
          image,
          id,
        }) => (
          <MainCard
            title={title}
            content={content}
            user={user}
            tags={tag}
            key={id}
            image={image?.url}
          />
        ))
      ) : (
        <div className={classes.container}>
          <ShowAlert severity="warning" message={NEWS_WARNING} />
        </div>
      )}
    </div>
  );
}

export default memo(MainPage);
