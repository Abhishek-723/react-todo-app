import { List, ListItem, ListItemText, Button, Modal  } from '@material-ui/core'
import React from 'react'
import db from './firebase'
import DeleteIcon from '@material-ui/icons/Delete';
import { makeStyles } from '@material-ui/core/styles';
import { useState } from 'react';

const useStyles = makeStyles((theme) => ({
    root: {
      height: 300,
      flexGrow: 1,
      minWidth: 300,
      transform: 'translateZ(0)',
      // The position fixed scoping doesn't work in IE 11.
      // Disable this demo to preserve the others.
      '@media all and (-ms-high-contrast: none)': {
        display: 'none',
      },
    },
    modal: {
      display: 'flex',
      padding: theme.spacing(1),
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));


function Todo(props) {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [input, setInput] = useState();

    const handleOpen = () => {
        setOpen(true);
    }
    const updateTodo = () => {
        db.collection('todos').doc(props.todo.id).set({
            todo: input
        }, { merge: true })
        
        setOpen(false);
    }
    return (
        <>
        <Modal
            open={open}
            onClose={e => setOpen(false)}
        >
            <div className={classes.paper}>
                <h1>This is a modal</h1>
                <input placeholder={props.todo.todo} value={input} onChange={ event => setInput(event.target.value) } />
                <Button onClick={updateTodo}>Update Todo</Button>
            </div>
        </Modal>
        <List className="Todo__list">
            <ListItem>
                <ListItemText primary="Todo" secondary={props.todo.todo} />
            </ListItem>
            <Button onClick={e => setOpen(true)}>Edit</Button>
            <DeleteIcon onClick={event => db.collection('todos').doc(props.todo.id).delete()}></DeleteIcon>
        </List>
        </>
    )
}

export default Todo
