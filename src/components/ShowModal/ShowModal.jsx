import React, { memo } from "react";
import { useDispatch, useSelector } from "react-redux";

import Modal from "@material-ui/core/Modal";

import { toogleModal } from "../../redux/actions/auth";

import { useStyles } from "./style";

const ShowModal = () => {
  const classes = useStyles();
  const open = useSelector((state) => state.auth.open);
  const dispath = useDispatch();
  return (
    <Modal
      open={open}
      className={classes.modal}
      onClose={() => dispath(toogleModal())}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      <div className={classes.paper}>
        <h4 className={classes.title}>Modal window</h4>
      </div>
    </Modal>
  );
};

export default memo(ShowModal);
