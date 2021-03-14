import React from 'react';
import {UserCard} from "./index";
import {useSelector} from "react-redux";

const UsersList = ({handleUserClick, handleUserDelete}) => {
    const users = useSelector(state => state.users.users);

        return (
            <div className={'users-cards-container'}>
                {
                    users.map((user, index) => {
                        return <UserCard
                            onClick={handleUserClick}
                            onDelete={handleUserDelete}
                            key={index}
                            user={user}/>
                    })
                }
            </div>
        );
}

export {UsersList};