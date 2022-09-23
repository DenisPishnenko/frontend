import React, { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Modal from '@material-ui/core/Modal';

import { closeModal } from '../../redux/actions/auth';
import ModalLayout from '../ModalLayout/ModalLayout';
import AuthForm from '../AuthForm/AuthForm';
import EditForm from '../EditForm/EditForm';

import useStyles from './style';

function ShowModal() {
  const classes = useStyles();

  const authError = useSelector((state) => state.auth.error);
  const editError = useSelector((state) => state.user.error);
  const modalType = useSelector((state) => state.modal.modalType);

  const modalTemplates = [
    { SIGN_UP: { title: 'Registration', error: authError, form: <AuthForm /> } },
    { SIGN_IN: { title: 'Authorization', error: authError, form: <AuthForm /> } },
    { EDIT_USER: { title: 'Edition', error: editError, form: <EditForm /> } },
  ];
  const modal = modalTemplates.find((item) => modalType in item);
  const currentModal = modalType && modal[modalType];
  const isOpenModal = useSelector((state) => state.modal.isOpenModal);
  const dispatch = useDispatch();

  const handleClose = () => dispatch(closeModal());
  return (
    <Modal
      open={isOpenModal}
      className={classes.modal}
      onClose={handleClose}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      <ModalLayout modal={currentModal} />
    </Modal>
  );
}

export default memo(ShowModal);
