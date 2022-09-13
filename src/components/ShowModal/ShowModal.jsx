import React, { memo } from "react";
import { useDispatch, useSelector } from "react-redux";

import Modal from "@material-ui/core/Modal";

import { closeModal } from "../../redux/actions/auth";
import AuthForm from "../AuthForm/AuthForm";

import { useStyles } from "./style";

const ShowModal = () => {
  const classes = useStyles();
  const isOpenModal = useSelector((state) => state.auth.isOpenModal);
  const dispath = useDispatch();
  return (
    <Modal
      open={isOpenModal}
      className={classes.modal}
      onClose={() => dispath(closeModal())}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      <div className={classes.paper}>
        <h4 className={classes.title}>Modal Authorization</h4>
        <AuthForm />
      </div>
    </Modal>
  );
};

export default memo(ShowModal);
