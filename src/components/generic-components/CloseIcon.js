import React from 'react';
import {ReactComponent as CloseIconSvg} from "../../assets/images/closeIcon.svg";

const CloseIcon = ({customClassName, onCloseIconClick}) => {

    return (
        <div className={`close-icon-container ${customClassName} `}
             onClick={onCloseIconClick}>
            <CloseIconSvg className={'close-icon'}/>
        </div>
    )
}

export {CloseIcon};