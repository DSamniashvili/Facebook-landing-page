import React from 'react';
import {CloseIcon} from "./CloseIcon";
import constants from "../../constants/GENERAL";

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
                    <img
                        src={constants.apis.randomImages}
                         className={'user-card-image'}
                         alt={'user-avatar'}/>
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