// Задание 2: Список дел с Material UI
// Цель: Разработать компонент TodoList для управления задачами: 
// добавление, отображение, и удаление задач.
// Компоненты:
// Используйте TextField для ввода новой задачи.
// Добавьте Button для добавления задачи в список.
// Для каждой задачи в списке используйте Card или ListItem из Material UI. 
// Внутри каждого элемента списка разместите текст задачи и IconButton с иконкой удаления (например, DeleteIcon).
// Логика:
// При нажатии на кнопку добавления, новая задача должна добавляться в список.
// Рядом с каждой задачей должна быть кнопка для её удаления.

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import "./ToDoListhm.css";

function TodoListhm() {
    const [inputText, setinputText] = useState('');
    const [arr, setarr] = useState([]);

    function clickHandler() {
        if(!inputText.trim()) {
            return;
        }
        setarr([...arr, inputText]);
        setinputText("");
    }

    function deleteTask(index) {
        const updatedTasks = arr.filter((_, i) => i !== index);
        setarr(updatedTasks);
    }

    return ( 
        <div className="todoList">
            <TextField 
                value={inputText}
                onChange={(event) => setinputText(event.target.value)}
                id="outlined-basic" 
                label="Новая задача" 
                variant="outlined" 
            />
            <div className="button_box">
            <Button 
                variant="outlined" 
                onClick={clickHandler}
            >
                Добавить
            </Button> 
            </div>
            {arr.map((item, index)=>(
                <Card key={index} sx={{ minWidth: 275 }}>
                    <CardContent>
                        <Typography variant="h5" component="div">
                            {item}
                        </Typography>
                        <IconButton
                            onClick={() => deleteTask(index)}
                            aria-label="delete"
                            >
                            <DeleteIcon />
                        </IconButton>
                    </CardContent>
                </Card>
            ))}
        </div>
     );
}

export default TodoListhm;