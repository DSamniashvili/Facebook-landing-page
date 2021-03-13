import React, {useState} from 'react';
import Modal from "react-modal";
import {ModalContent} from "../ModalContent";

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

const ModalComponent = ({closeModal, openModal, modalIsOpen, contentLabel, heading2, text, currentUserId}) => {

    const closeModalBound = () => {
        if(closeModal){
            closeModal(false);
        }
    }

    return (
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel={contentLabel}
            >
                <h2 className={'registration-heading-text'}>{heading2}</h2>
                <p className={'registration-secondary-text'}>{text}</p>
                <button onClick={closeModalBound} className={'modal-close-icon'}>X</button>
                <ModalContent
                    closeModal={closeModal}
                    currentUserId={currentUserId}/>
            </Modal>
        );
}

export {ModalComponent};