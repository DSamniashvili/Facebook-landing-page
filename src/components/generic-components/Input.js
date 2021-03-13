import React from 'react';
import '../../styles/LoginRegisterContainer.scss';

const Input = ({
                   customInputClass,
                   value,
                   placeholder = 'fill the input',
                   type = 'text',
                   name,
                   onChange
               }) => {

    const handleChangeBound = (event) => {
        if(onChange){
            onChange(event, name);
        }
    }
    return (
        <input
            className={`input ${customInputClass}`}
            value={value}
            placeholder={placeholder}
            type={type}
            name={name}
            onChange={(event) => handleChangeBound(event)}
        />
    );
}

export {Input};