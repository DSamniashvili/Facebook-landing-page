import React from 'react';
import {ReactComponent as CloseIconSvg} from '../../assets/images/closeIcon.svg';
import userImage from '../../assets/images/userIcon.png'
import girl from '../../assets/images/girl.jpg'
import {CloseIcon} from "./CloseIcon";

const UserCard = ({user, onClick, onDelete}) => {
    const onClickBound = () => {
        if (onClick) {
            onClick(user.id);
        }
    }
        const onDeleteBound = () => {
        if (onDelete) {
            onDelete(user.id);
        }
    }

    return (
        <div className={'user-card-container'}>
            <div onClick={onClickBound}>
                <div className={'user-card-image-wrapper'}>
                    <img src={girl} className={'user-card-image'}/>
                </div>
                <div className={'user-card-name-wrapper'}>
                    <p className={'user-card-name'}>{user.name}</p>
                </div>
            </div>
            <CloseIcon onCloseIconClick={onDeleteBound} />
        </div>
    );
}

export {UserCard};