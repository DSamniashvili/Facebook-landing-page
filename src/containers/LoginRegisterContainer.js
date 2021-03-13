import React, {useState} from 'react';
import '../styles/LoginRegisterContainer.scss';
import {Input, Button, ModalComponent} from "../components/index";
import {useDispatch} from "react-redux";

const LoginRegisterContainer = () => {
    const [modalIsOpen, setIsModalOpen] = useState(false);

    const dispatch = useDispatch();
    const [state, setState] = useState({
        email: "",
        password: "",
    });

    const handleKeyDown = (event, name) => {
        if (event.key === ' ' || event.key === 'Enter') {
            switch (name) {
                case 'login':
                    handleLogin();
                    break;
                case 'register':
                    showRegisterPopup();
                    break;

                default:
                    break;
            }
        }
    }

    const handleLogin = () => {
        console.log('handleLogin', state);
        // dispatch(signInUserAction({ email, password }));

        setState({
            email: '',
            password: '',
        });
    }

    const showRegisterPopup = () => {
        setIsModalOpen(true);
    }

    const closeModal = () => {
        setIsModalOpen(false);
    }

    const handleChange = (event, name) => {
        const val = event.target && event.target.value && event.target.value.trim();
        setState({
            ...state,
            [name]: val,
        });
    }

    const {email, password} = state;

    return (
        <>
            <div className={'login-register-container'}>
                <div className={'login-register-wrapper'}>
                    <Input
                        customInputClass={'login-input'}
                        value={email}
                        placeholder="Email or Phone number"
                        type={'text'}
                        name='email'
                        secureTextEntry
                        onChange={handleChange}/>

                    <Input
                        customInputClass={'login-input'}
                        value={password}
                        placeholder="Password"
                        type={'password'}
                        name='password'
                        secureTextEntry
                        onChange={handleChange}/>

                    <Button
                        name={'log-in-btn'}
                        onClick={handleLogin}
                        onKeyDown={(event) => handleKeyDown(event, 'login')}>
                        Log in
                    </Button>
                    <div className={'forgot-password-container'} tabIndex={-1}>
                        <p className={'forgot-password-text'}> Forgot password? </p>
                    </div>

                    <Button
                        name={'new-account-btn'}
                        onClick={showRegisterPopup}
                        onKeyDown={(event) => handleKeyDown(event, 'register')}>
                        Create New Account
                    </Button>
                </div>
            </div>
            <ModalComponent
                closeModal={closeModal}
                openModal={showRegisterPopup}
                modalIsOpen={modalIsOpen}
                contentLabel={"Registration"}
                heading2={'Sign Up'}
                text={"It's quick and easy."}
            />
        </>
    );
}

export {LoginRegisterContainer};