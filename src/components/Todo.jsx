import {React, useState} from 'react'
import { Box } from '@mui/material'
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteForeverTwoTone';
import '../App.css'
export const Todo = ({task , taskId, isCompleted, toggleCompleteStatus, deleteTodo}) => {
    const handleCheckboxChange = () => {
        toggleCompleteStatus(taskId);
      };
    const handleDelete = () => {
    deleteTodo(taskId);
    };
    return (
        <ListItem
            sx={{ bgcolor: '#F8FAFD', color: 'black', width:'100%', borderRadius:'20px',marginBottom: '10px'}}
            secondaryAction={
                <IconButton onClick={handleDelete}>
                    <DeleteTwoToneIcon />
                </IconButton>
            }
        >
            <ListItemButton role={undefined} dense onClick={handleCheckboxChange}>
                <ListItemIcon>
                    <Checkbox
                        name="checkbox"
                        edge="start"
                        checked={isCompleted}
                        tabIndex={-1}
                        disableRipple
                        style={{color:'black'}}
                    />
                </ListItemIcon>
                <ListItemText
                    id={taskId}
                    primary={task}
                    sx={{ textDecoration: isCompleted ? 'line-through' : 'none'}}
                />
            </ListItemButton>
        </ListItem>
    )
}
