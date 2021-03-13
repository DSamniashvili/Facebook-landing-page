import React from 'react';
import '../../styles/LoginRegisterContainer.scss';

const Input = ({
                   customInputClass,
                   value,
                   error,
                   showErrors,
                   placeholder = 'fill the input',
                   type = 'text',
                   name,
                   onBlur,
                   onChange
               }) => {

    const handleChangeBound = (event) => {
        if (onChange) {
            onChange(event, name);
        }
    }

    const handleBlurBound = (event) => {
        if (onBlur) {
            onBlur(event, name);
        }
    }

    return (
        <div className={'input-container'}>
            <input
                className={`input ${customInputClass} ${error && 'input-error'}`}
                value={value}
                placeholder={placeholder}
                type={type}
                name={name}
                onBlur={(e) => handleBlurBound(e)}
                onChange={(event) => handleChangeBound(event)}
            />
            {
                showErrors && error && error.length > 0 ?
                    <div className={'error-container'}>
                        <p className={'error-icon'}>X</p>
                    </div> :
                    null
            }

            {
                showErrors && error && error.length > 0 ?
                        <span className={'error-text'}>{error}</span> :
                    null
            }

        </div>
    );
}

export {Input};