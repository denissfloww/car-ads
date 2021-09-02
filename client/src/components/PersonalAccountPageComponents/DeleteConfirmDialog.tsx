import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {deleteAd, fetchUserAds} from "../../redux/slices/adSlice";
import {useDispatch} from "react-redux";

interface DialogProps {
    open: boolean;
    handleClose: () => void;
    handleDelete: () => void;
}

const DeleteConfirmDialog = (props: DialogProps) => {
    const {handleClose, open, handleDelete} = props;
    return (
        <Dialog open={open} onClose={handleClose} aria-labelledby='alert-dialog-title' aria-describedby='alert-dialog-description'>
            <DialogTitle id='alert-dialog-title'>{"Вы уверены что хотите удалить обьявление?"}</DialogTitle>
            <DialogContent>
                <DialogContentText id='alert-dialog-description'>
                    Если вы удалите объявление, оно исчезнет навсегда
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color='primary'>
                    Отмена
                </Button>
                <Button onClick={handleDelete} color='secondary' autoFocus>
                    Удалить
                </Button>
            </DialogActions>
        </Dialog>
    );
}

export default DeleteConfirmDialog