import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";

import '../styles/ListContainer.scss';
import {ModalComponent, UsersList} from "../components";
import {clearCurrentUserAction, deleteUserAction, setCurrentUserAction} from "../store/actions/login-actions";

const ListContainer = () => {
    const dispatch = useDispatch();

    const [modalIsOpen, setIsModalOpen] = useState(false);
    const users = useSelector(state => state.users.users);

    const showEditUserPopup = () => {
        setIsModalOpen(true);
    }

    const closeModal = () => {
        setIsModalOpen(false);
        dispatch(clearCurrentUserAction());
    }

    const handleUserClick = (userId) => {
        setIsModalOpen(true);
        dispatch(setCurrentUserAction(userId));
    }
    const handleUserDelete = (userId) => {
        dispatch(deleteUserAction(userId));
    }

    const showScroll = users && users.length > 6;

    return (
        <>
            <div className={`list-container ${users && users.length > 0 ? 'list-container-filled' : 'list-container-empty'} ${showScroll && 'scrollable'}`}>
                {
                    users && users.length > 0 ?
                        <>
                            <h2 className={'text-facebook'}>Facebook</h2>
                            <h3>Recent Logins</h3>
                            <p>Click your picture or add an account.</p>
                            <UsersList handleUserClick={handleUserClick}
                                       handleUserDelete={handleUserDelete}/>
                        </> :
                        <>
                            <h1 className={'heading-text empty-list-heading'}>Facebook</h1>
                            <h2 className={'heading-text empty-list-text'}>Connect with friends and the world around you on Facebook.</h2>

                        </>
                }
            </div>
            <ModalComponent
                closeModal={closeModal}
                openModal={showEditUserPopup}
                modalIsOpen={modalIsOpen}
                contentLabel={"Edit"}
                heading2={'Edit user'}
                text={"Change user details."}
            />
        </>
    );
}

export
{
    ListContainer
};