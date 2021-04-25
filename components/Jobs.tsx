import React from 'react';
import { Button } from "@material-ui/core";
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

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & { children?: React.ReactElement<any, any> },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const StatusTrue = ({ onClick }) => {
    return (
        <Button variant='outlined' color='primary' onClick={onClick} className='h-12 w-32'>
            신청하기
        </Button>
    )
}

const StatusFalse = () => {
    return (
        <Button variant='outlined' disabled className='h-12 w-32'>
            ❌ 신청하기
        </Button>
    )
}

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
        <div className='p-10 flex flex-col gap-4'>
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
                        id='discord'
                        label='디스코드 닉네임 & 태그'
                        type='text'
                        fullWidth
                    />
                    <TextField
                        margin='dense'
                        id='discord_id'
                        label='디스코드 아이디'
                        type='number'
                        fullWidth
                    />
                    <TextField
                        margin='dense'
                        id='age'
                        label='나이'
                        type='number'
                        fullWidth
                    />
                    <TextField
                        margin='dense'
                        id='github'
                        label='깃허브 아이디'
                        type='text'
                        fullWidth
                    />
                    <TextField
                        margin='dense'
                        id='self_intro'
                        label='자기소개'
                        type='text'
                        fullWidth
                    />
                    <TextField
                        margin='dense'
                        id='determination'
                        label='각오'
                        type='text'
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} variant='contained' color="secondary" className='font-black'>
                        Cancel
                    </Button>
                    <Button onClick={() => {
                        const discord = document.getElementById('discord').value;
                        const id = document.getElementById('discord_id').value;
                        const age = document.getElementById('age').value;
                        const intro = document.getElementById('self_intro').value;
                        const determination = document.getElementById('determination').value;
                        const github = document.getElementById('github').value;
                        fetch('/api/Webhook', {
                            method: 'POST',
                            body: new URLSearchParams({
                                discord,
                                id,
                                age,
                                github,
                                intro,
                                determination
                            })
                        })
                    }} variant='contained' color="primary" className='font-black'>
                        Send!
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default Jobs;