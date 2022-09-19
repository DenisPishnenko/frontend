import React, { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Modal from '@material-ui/core/Modal';

import { closeModal } from '../../redux/actions/auth';
import AuthForm from '../AuthForm/AuthForm';
import EditForm from '../EditForm/EditForm';

import useStyles from './style';

function ShowModal() {
  const classes = useStyles();
  const isOpenModal = useSelector((state) => state.auth.isOpenModal);
  const error = useSelector((state) => state.auth.error);
  const editingError = useSelector((state) => state.user.error);
  const modalType = useSelector((state) => state.auth.modalType);
  const editModalType = useSelector((state) => state.auth.editModalType);
  const isAuth = modalType === 'SIGN IN';
  const dispatch = useDispatch();
  return (
    <Modal
      open={isOpenModal}
      className={classes.modal}
      onClose={() => dispatch(closeModal())}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      <div className={classes.paper}>
        {editModalType ? (
          <div>
            <h4 className={classes.title}>Editing</h4>
            {editingError && (<h3 className={classes.error}>{editingError}</h3>)}
            <EditForm />
          </div>
        ) : (
          <div>
            <h4 className={classes.title}>
              {isAuth ? 'Authorization' : 'Registration'}
            </h4>
            {error && (<h3 className={classes.error}>{error}</h3>)}
            <AuthForm />
          </div>
        )}
      </div>
    </Modal>
  );
}

export default memo(ShowModal);
