import React, {useState, useEffect} from 'react';
import {ListContainer, LoginRegisterContainer} from './index';
import Modal from 'react-modal';


import '../styles/ContentContainer.scss';
import {ModalContent} from "../components";

const customStyles = {
    content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)'
    }
};

const ContentContainer = () => {
    const [modalIsOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    }

    const closeModal = () => {
        setIsModalOpen(false);
    }

        return (
            <div className={'content-container'}>
                <ListContainer />
                <LoginRegisterContainer openModal={openModal} />
                {
                        <Modal
                            isOpen={modalIsOpen}
                            onRequestClose={closeModal}
                            style={customStyles}
                            contentLabel="Registration"
                        >
                            <h2 className={'registration-heading-text'}>Sign Up</h2>
                            <p className={'registration-secondary-text'}>It's quick and easy.</p>
                            <button onClick={closeModal} className={'modal-close-icon'}>X</button>
                            <ModalContent closeModal={closeModal} />
                        </Modal>
                }
            </div>
        );
}

export {ContentContainer};

