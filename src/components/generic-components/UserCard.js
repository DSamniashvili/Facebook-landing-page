import React from 'react';
import {ReactComponent as CloseIconSvg} from '../../assets/images/closeIcon.svg';
import userImage from '../../assets/images/userIcon.png'
import girl from '../../assets/images/girl.jpg'

const UserCard = ({user}) => {
    return (
        <div className={'user-card-container'}>
            <div className={'close-icon-container'}>
                <CloseIconSvg className={'close-icon'}/>
            </div>
            <div className={'user-card-image-wrapper'}>
                <img src={girl} className={'user-card-image'}/>
            </div>
            <div className={'user-card-name-wrapper'}>
                <p className={'user-card-name'}>{user.name}</p>
            </div>

        </div>
    );
}

export {UserCard};