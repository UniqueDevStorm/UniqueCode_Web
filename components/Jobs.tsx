import React from 'react';
import Button from "./Button";
import Dialog from '@material-ui/core/Dialog';
import TextField from '@material-ui/core/TextField';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import { TransitionProps } from '@material-ui/core/transitions';

interface ProjectProps {
    name: string
    description: string
    status: boolean
}

const StatusTrue = ({ onClick }) => {
    return (
        <div>
            <Button onClick={onClick}>
                신청하기
            </Button>
        </div>
    )
}

const StatusFalse = () => {
    return (
        <div className='select-none flex'>
            <Button color={'#000'}>
                ❌ 신청하기
            </Button>
        </div>
    )
}

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & { children?: React.ReactElement<any, any> },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const Jobs: React.FC<ProjectProps> = ({
    name,
    description,
    status
}) => {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <div className='p-10'>
            <h1 className='font-thin text-3xl sm:text-6xl'>{name}</h1>
            <h2 className='font-thin text-2xl sm:text-4xl'>{description}</h2>
            {status ? <StatusTrue onClick={handleClickOpen} /> : <StatusFalse />}
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-labelledby="form-dialog-title"
            >
                <DialogTitle id='form-dialog-title'>
                    {name}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        {description}
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin='dense'
                        id='name'
                        label='Email Address'
                        type='email'
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="red" className='font-black'>
                        Cancel
                    </Button>
                    <Button onClick={handleClose} color="green" className='font-black'>
                        Send!
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default Jobs;