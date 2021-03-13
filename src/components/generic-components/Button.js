import React from 'react';
import '../../styles/LoginRegisterContainer.scss';

const Button = ({name, label, onKeyDown, onClick, children}) => {

    const handleKeyDownBound = (event) => {
        if(onKeyDown){
            onKeyDown(event);
        }
    }

    const handleClickBound = (event) => {
        if(onKeyDown){
            onKeyDown(event);
        }
    }

    return <button className={`button ${name}`}
                   onKeyDown={e => handleKeyDownBound(e)}
                   onClick={onClick}>
        <span>{children}</span>
    </button>
}

export {Button};