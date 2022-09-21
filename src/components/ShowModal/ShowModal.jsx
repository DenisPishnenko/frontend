import React, { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Modal from '@material-ui/core/Modal';

import { closeModal } from '../../redux/actions/auth';
import { closeEditModal } from '../../redux/actions/user';
import AuthForm from '../AuthForm/AuthForm';
import EditForm from '../EditForm/EditForm';

import useStyles from './style';

function ShowModal() {
  const classes = useStyles();
  const isOpenAuthModal = useSelector((state) => state.auth.isOpenModal);
  const isOpenEditModal = useSelector((state) => state.user.isOpenModal);
  const authError = useSelector((state) => state.auth.error);
  const editingError = useSelector((state) => state.user.error);
  const modalType = useSelector((state) => state.auth.modalType);
  const isAuth = modalType === 'SIGN IN';
  const dispatch = useDispatch();

  const handleClose = () => {
    if (isOpenAuthModal) dispatch(closeModal());
    else dispatch(closeEditModal());
  };
  return (
    <Modal
      open={isOpenAuthModal || isOpenEditModal}
      className={classes.modal}
      onClose={handleClose}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      <div className={classes.paper}>
        {isOpenEditModal ? (
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
            {authError && (<h3 className={classes.error}>{authError}</h3>)}
            <AuthForm />
          </div>
        )}
      </div>
    </Modal>
  );
}

export default memo(ShowModal);
