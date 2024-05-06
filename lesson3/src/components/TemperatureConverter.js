// Задание 1: Температурный конвертер с Material UI
// Цель: Создать компонент TemperatureConverter, используя компоненты TextField и Button из Material UI для ввода и отображения температур в градусах Цельсия и Фаренгейта.
// Компоненты:
// Используйте TextField для ввода значения температуры.
// Добавьте лейблы к каждому TextField, указывая единицы измерения (Цельсия и Фаренгейта).
// Логика:
// При вводе значения в одно поле, автоматически конвертируйте его и отобразите в другом.
// Реализуйте конвертацию температур в обоих направлениях.

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import "./TemperatureConverter.css";

function TemperatureConverter() {
    const [celcius, setcelcius] = useState();
    const [farenheit, setfarenheit] = useState();
    
    function convertToFarenheit(celcius) {
        let farenheit = Math.round(9/5 * celcius + 32);
        setfarenheit(farenheit);
    }

    function convertToCelsius(farenheit) {
        let celcius = Math.round(9/5 * farenheit - 32);
        setcelcius(celcius);
    }

    function celsiusChange(event) {
        setcelcius(event.target.value);
        convertToFarenheit(event.target.value);
    }

    function farenheitChange(event) {
        setfarenheit(event.target.value);
        convertToCelsius(event.target.value);
    }

    function clickHandler() {
        setcelcius("");
        setfarenheit("");
    }

    return (
        <div className='box'>
            <TextField 
                value={celcius}
                onChange={celsiusChange}
                id="outlined-basic" 
                label="Celsius" 
                variant="outlined" 
            />
            <TextField 
                value={farenheit}
                onChange={farenheitChange}
                id="outlined-basic" 
                label="Fahrenheit" 
                variant="outlined" 
            />
            <div className="button_box">
                <Button 
                    variant="outlined" 
                    onClick={clickHandler}
                >
                    Очистить
                </Button> 
            </div>
        </div>
    );
}

export default TemperatureConverter;