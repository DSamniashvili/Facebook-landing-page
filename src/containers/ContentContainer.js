import React, {useState, useEffect} from 'react';
import {ListContainer, LoginRegisterContainer} from './index';
import '../styles/ContentContainer.scss';


const ContentContainer = () => {
        return (
            <div className={'content-container'}>
                <ListContainer />
                <LoginRegisterContainer />
            </div>
        );
}

export {ContentContainer};

