import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';

interface DialogProps {
    open: boolean;
    handleClose: () => void;
    handleUpdate: () => void;
}

const UpdateConfirmDialog = (props: DialogProps) => {
    const {handleClose, open, handleUpdate} = props;
    return (
        <Dialog open={open} onClose={handleClose} aria-labelledby='alert-dialog-title' aria-describedby='alert-dialog-description'>
            <DialogTitle id='alert-dialog-title'>{"Вы уверены что хотите обновить обьявление?"}</DialogTitle>
            <DialogActions>
                <Button onClick={handleClose} color='primary'>
                    Отмена
                </Button>
                <Button onClick={handleUpdate} color='secondary' autoFocus>
                    Обновить
                </Button>
            </DialogActions>
        </Dialog>
    );
}

export default UpdateConfirmDialog