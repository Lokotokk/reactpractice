import TextField from '@mui/material/TextField';
import "./TextDisplayForm.css";
import Button from '@mui/material/Button';
import { useState } from 'react';
import { Typography } from '@mui/material';

function TextDisplayForm() {
    const [inputText, setinputText] = useState('');
    const [arr, setarr] = useState([]);

    function clickHandler() {
        setarr(inputText);
        setinputText("");
        document.getElementById("text").style.display="block";
    }

    return ( 
        <div className='texdisplay_box'>
            <TextField value={inputText} onChange={(event) => setinputText(event.target.value)} id="outlined-basic" label="Введите текст" variant="outlined" fullWidth/>
            <Button variant="outlined" onClick={clickHandler}>Отобразить текст</Button>
            <h5 id='text'>{arr}</h5>
        </div>
     );
}

export default TextDisplayForm;