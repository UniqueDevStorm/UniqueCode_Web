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

class Jobs extends React.Component<{ name: string, description: string }, { id: string, age: string, portfolio: string, determination: string, open: boolean }> {
    constructor(props) {
        super(props);
        this.state = { id: '', age: '', portfolio: '', determination: '', open: false }
    }
    idChange = e => {
        this.setState({ id: e.target.value })
    }
    ageChange = e => {
        this.setState({ age: e.target.value })
    }
    portfolioChange = e => {
        this.setState({ portfolio: e.target.value })
    }
    determinationChange = e => {
        this.setState({ determination: e.target.value })
    }
    handleClickOpen = () => {
        this.setState({ open: true })
    };
    handleClose = () => {
        this.setState({ open: false })
    };
    render() {
        return (
            <div className='p-10 flex flex-col gap-4'>
                <h1 className='font-thin text-3xl sm:text-6xl'>{this.props.name}</h1>
                <h2 className='font-thin text-2xl sm:text-4xl'>{this.props.description}</h2>
                <Button variant='outlined' color='primary' onClick={this.handleClickOpen} className='h-12 w-32'>
                    신청하기
                </Button>
                <Dialog
                    open={this.state.open}
                    TransitionComponent={Transition}
                    keepMounted
                    onClose={this.handleClose}
                    aria-labelledby="form-dialog-title"
                >
                    <DialogTitle id='form-dialog-title'>
                        {this.props.name}
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            {this.props.description}
                        </DialogContentText>
                        <TextField
                            autoFocus
                            margin='dense'
                            label='디스코드 아이디'
                            type='text'
                            fullWidth
                            onChange={this.idChange}
                        />
                        <TextField
                            margin='dense'
                            label='나이'
                            type='text'
                            fullWidth
                            onChange={this.ageChange}
                        />
                        <TextField
                            margin='dense'
                            label='포트폴리오(URL)'
                            type='text'
                            fullWidth
                            onChange={this.portfolioChange}
                        />
                        <TextField
                            margin='dense'
                            label='각오'
                            type='text'
                            fullWidth
                            onChange={this.determinationChange}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} variant='contained' color="secondary" className='font-black'>
                            Cancel
                        </Button>
                        <Button onClick={() => {
                            fetch('/api/Webhook', {
                                method: 'POST',
                                body: new URLSearchParams({
                                    id: this.state.id,
                                    age: this.state.age,
                                    portfolio: this.state.portfolio,
                                    determination: this.state.determination
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
}

export default Jobs;