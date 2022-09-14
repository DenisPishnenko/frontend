import React, { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Modal from '@material-ui/core/Modal';

import { closeModal } from '../../redux/actions/auth';
import AuthForm from '../AuthForm/AuthForm';

import useStyles from './style';

function ShowModal() {
  const classes = useStyles();
  const isOpenModal = useSelector((state) => state.auth.isOpenModal);
  const error = useSelector((state) => state.auth.error);
  const modalType = useSelector((state) => state.auth.modalType);
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
        <h4 className={classes.title}>
          {modalType === 'SIGN IN' ? 'Authorization' : 'Registration'}
        </h4>
        {error && <h3 className={classes.error}>{error}</h3>}
        <AuthForm />
      </div>
    </Modal>
  );
}

export default memo(ShowModal);
