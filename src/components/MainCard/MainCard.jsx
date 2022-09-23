import React, { memo } from 'react';
import { useNavigate } from 'react-router-dom';
import { string, shape } from 'prop-types';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
// import ImageIcon from '@material-ui/icons/Image';

import defaultImage from '../../assets/photo.png';

import useStyles from './style';

function MainCard({
  title, content, user, tag, image,
}) {
  const classes = useStyles();
  const navigate = useNavigate();
  const getUserPage = () => navigate(`user/${user.id}`);

  const newsImage = image ? `${process.env.REACT_APP_API_URL}/${image}` : defaultImage;
  return (
    <Card className={classes.root}>
      <img
        src={newsImage}
        alt="news"
        className={classes.image}
      />
      <CardContent className={classes.inner}>
        <Typography className={classes.title} variant="h5" component="h2">
          {title}
        </Typography>
        <Typography className={classes.content} variant="body2" component="p">
          {content}
        </Typography>
        {user && (
          <div>
            <Typography className={classes.content} variant="body2" component="p">
              <span>Author: </span>
              <span
                className={classes.userName}
                onClick={getUserPage}
                role="presentation"
              >
                {user.name}
              </span>
            </Typography>
          </div>
        )}
        <Typography className={classes.tag} variant="body2" component="p">
          <span>tag: </span>
          {tag}
        </Typography>
      </CardContent>
    </Card>
  );
}

MainCard.propTypes = {
  title: string,
  content: string,
  tag: string,
  image: string,
  user: shape(),
};
MainCard.defaultProps = {
  title: '',
  content: '',
  tag: '',
  image: '',
  user: null,
};

export default memo(MainCard);
