import React from 'react';
import {useSelector} from "react-redux";

import '../styles/ListContainer.scss';
const ListContainer = () => {
    const users = useSelector(state => state.users.users);

    return (
        <div className={'list-container'}>
            {
                users && users.length > 0 ?
                // users ?
                    <>
                        <h2 className={'text-facebook'}>Facebook</h2>
                        <h3>Recent Logins</h3>
                        <p>Click your picture or add an account.</p>
                    </> :
                    <>
                        <h1>Facebook</h1>
                        <h2>Connect with friends and the world around you on Facebook.</h2>

                    </>
            }
        </div>
    );
}

export {ListContainer};