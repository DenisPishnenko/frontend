import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import Loader from '../../components/Loader/Loader';
import ShowAlert from '../../components/ShowAlert/ShowAlert';
import MainCard from '../../components/MainCard/MainCard';
import { fetchUser } from '../../redux/actions/user';
import { NEWS_WARNING } from '../../constants';

import useStyles from './style';
import UserCard from '../../components/UserCard/UserCard';

function UserPage() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { id } = useParams();
  const { user, error, isLoading } = useSelector((state) => state.user);
  useEffect(() => {
    if (id) dispatch(fetchUser(id));
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
    <div>
      {user
        ? (
          <div className={classes.wrapper}>
            <UserCard user={user} />
            <div className={classes.newsContainer}>
              {user.news.map((item) => (
                <MainCard title={item.title} content={item.content} key={item.id} />
              ))}
            </div>
          </div>
        )
        : (
          <div className={classes.container}>
            <ShowAlert severity="warning" message={NEWS_WARNING} />
          </div>
        )}
    </div>
  );
}

export default memo(UserPage);
