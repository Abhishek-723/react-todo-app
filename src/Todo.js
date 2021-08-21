import { List, ListItem, ListItemText, Button } from '@material-ui/core'
import React from 'react'
import db from './firebase'
import DeleteIcon from '@material-ui/icons/Delete';

function Todo(props) {
    return (
        <List className="Todo__list">
            <ListItem>
                <ListItemText primary="Todo" secondary={props.todo.todo} />
            </ListItem>
            <DeleteIcon onClick={event => db.collection('todos').doc(props.todo.id).delete()}></DeleteIcon>
        </List>
    )
}

export default Todo
