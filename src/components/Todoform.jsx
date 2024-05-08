import { TextField, Button,InputAdornment, FilledInput, FormControl, InputLabel } from '@mui/material';
import { Fragment, React, useState } from 'react';
export const Todoform = ({addTodo}) => {
    const [value, setValue] = useState("");

    const handleChange = (e) => {
        setValue(e.target.value);
    }
    const handleAddTask = (e) => {
        e.preventDefault()
        if (value.trim() !== '') {
            addTodo(value)
            console.log('Task added', value)
            setValue('')
        } else {
            console.log("Empty")
            return
        }
    }

    return (
        <Fragment>
            <FormControl variant="filled" sx={{
                width:'80%',
                margin:'0 auto',
                marginTop:'20px',
                '& .MuiInputLabel-root': {
                    color: 'black', // Set text color of label to black
                    '&.Mui-focused': {
                        color: 'black', // Set text color of label to black when focused
                    },
                },
                '& .MuiInputBase-root': {
                    color: 'black', // Set text color of input to black
                    '&:hover': {
                        color: 'black', // Set text color of input to black on hover
                        '&:before': {
                            borderBottomColor: '#A4AA83', // Set underline color to #A4AA83 on hover
                        },
                    },
                    '&.Mui-focused': {
                        '& .MuiInputBase-input': {
                            color: 'black', // Set text color of input to black when focused
                        },
                        '&:before': {
                            borderBottomColor: 'black', // Set underline color to black when focused
                        },
                        '&:after': {
                            borderBottomColor: 'black', // Set underline color to black after being focused
                        },
                    },
                    '&.MuiFilledInput-root::after': {
                        borderBottomColor: 'black', // Set the color of the pseudo-element to black
                    },
                },
            }}>
                <InputLabel htmlFor="task-name">What to do..</InputLabel>

                <FilledInput
                    onChange={handleChange}
                    value={value}
                    id="task-name"
                    endAdornment={
                        <InputAdornment position="end">
                            <Button 
                                sx={{
                                    color:'black',
                                    backgroundColor:'#FFFFFF',
                                    '&:hover' : {
                                        backgroundColor:'#FFFFFF'
                                    },
                                }}
                                onClick={handleAddTask}
                                variant="contained"
                            >
                                Add Task
                            </Button>
                        </InputAdornment>
                    }
                />
            </FormControl>

        </Fragment>
    )
}
