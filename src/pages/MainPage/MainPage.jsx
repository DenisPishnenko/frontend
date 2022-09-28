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
  const {
    news, error, isLoading, filterType, searchText,
  } = useSelector((state) => state.news);

  const filterNews = () => {
    switch (filterType) {
      case 'Author':
        return news.filter((item) => item.user.name.indexOf(searchText) !== -1);
      case 'Tag':
        return news.filter((item) => item.tag.indexOf(searchText) !== -1);
      case 'All':
        return news.filter((item) => Object.values(item).some((value) => typeof value === 'string' && value.indexOf(searchText) !== -1));
      default:
        return news;
    }
  };
  const filteredNews = filterNews();
  console.log(filterType);
  console.log(filteredNews);

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
      {filteredNews.length ? (
        filteredNews.map(({
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
