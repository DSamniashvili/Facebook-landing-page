import React from 'react';
import {UserCard} from "./index";
import {useSelector} from "react-redux";

const UsersList = () => {
    const users = useSelector(state => state.users.users);

        return (
            <div className={'users-cards-container'}>
                {
                    users.map((user, index) => {
                        return <UserCard key={index} user={user} />
                    })
                }
            </div>
        );
}

export {UsersList};