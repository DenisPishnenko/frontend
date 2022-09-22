import React, { memo } from 'react';
import { shape } from 'prop-types';

import useStyles from './style';

function ModalLayout({ modal }) {
  const classes = useStyles();
  return (
    <div className={classes.paper}>
      <div key={modal.title}>
        <h4 className={classes.title}>{modal.title}</h4>
        {modal.error && (<h3 className={classes.error}>{modal.error}</h3>)}
        {modal.form}
      </div>
    </div>

  );
}

ModalLayout.propTypes = {
  modal: shape(),
};
ModalLayout.defaultProps = {
  modal: null,
};

export default memo(ModalLayout);
