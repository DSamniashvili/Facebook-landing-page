import React, {useState, useEffect} from 'react';
import {Input} from "./generic-components/Input";
import {Button} from "./generic-components/Button";
import {useDispatch, useSelector} from "react-redux";

import {DotLoader} from "react-spinners";


import '../styles/LoginRegisterContainer.scss';
import '../styles/RegistrationContainer.scss';
import {callToRegisterUserAction, callToUpdateUserAction} from "../store/actions/login-actions";
import {validateEmail, validatePassword} from "../utils/general-functions";
import constants from "../constants/GENERAL";

const initialState = {
    name: "",
    surname: "",
    email: "",
    password: "",
}

const initialErrorState = {
    nameError: 'Invalid name',
    surnameError: 'Invalid surname',
    emailError: 'Invalid email',
    passwordError: 'Invalid password',
}

const ModalContent = ({closeModal, currentUserId}) => {
    const dispatch = useDispatch();
    const isLoading = useSelector(state => state.users.isLoading);


    const [state, setState] = useState(initialState);
    const [error, setError] = useState(initialErrorState);
    const [showErrors, setShowErrors] = useState(false);

    const activeUser = useSelector(state => state.users.activeUser);

    const fillState = () => {
        if(activeUser){
            setState({
                name: activeUser.name,
                surname: activeUser.surname,
                email: activeUser.email,
                password: activeUser.password,
            });

            setError({
                nameError: '',
                surnameError: '',
                emailError: '',
                passwordError: '',
            })
        }
    }

    useEffect(() => {
        fillState();
    }, [])

    const {name, surname, email, password} = state;
    const {nameError, surnameError, emailError, passwordError} = error;

    const handleKeyDown = (event, name) => {
        if (event.key === ' ' || event.key === 'Enter') {
            switch (name) {
                case 'register':
                    handleRegister();
                    break;

                default:
                    break;
            }
        }
    }

    const handleBlur = (event, name) => {
        const val = event.target && event.target.value && event.target.value.trim();
        const errorMessage = `Invalid ${name}`;
        const stateValue = `${name}Error`;

        const validEmail = validateEmail(email);
        const validPassword = validatePassword(password);

        if (!val || val.length === 0 || (name ==='password' && !validPassword) || (name ==='email' && !validEmail)) {
            setError({
                ...error,
                [stateValue]: errorMessage,
            });
        } else {
            setError({
                ...error,
                [stateValue]: '',
            });
        }
    }

    const handleRegister = () => {

        const validEmail = !emailError && validateEmail(email);
        const validPassword = !passwordError && validatePassword(password);

        if (!nameError && !surnameError && validEmail && validPassword) {

            if(activeUser){
                dispatch(callToUpdateUserAction(
                    activeUser.id,
                    name,
                    surname,
                    email,
                    password
                    ));
            } else {
                dispatch(callToRegisterUserAction(
                    new Date().toString(),
                    name,
                    surname,
                    email,
                    password
                ));
            }

            setState(initialState);
            setError(initialErrorState);
            setTimeout(() => {
                closeModal();
            }, constants.TIMEOUT_MS);
        } else {
            setShowErrors(true);
        }
    }

    const handleChange = (event, name) => {
        const val = event.target && event.target.value && event.target.value.trim();
        setState({
            ...state,
            [name]: val,
        });
    }

    return (
        <div className={'registration-container'}>
            {
                isLoading &&
                    <div className={'registration-loading-overlay'}>
                        <DotLoader
                            color={'#1877f2;'} size={150} />
                    </div>

            }
            <div className="name-and-surname-inputs-container">
                <Input
                    customInputClass={'register-input register-input-name'}
                    value={name}
                    showErrors={showErrors}
                    error={nameError}
                    placeholder="Name"
                    type={'text'}
                    name='name'
                    onBlur={handleBlur}
                    onChange={handleChange}/>

                <Input
                    customInputClass={'register-input register-input-surname'}
                    value={surname}
                    showErrors={showErrors}
                    error={surnameError}
                    placeholder="Surname"
                    type={'text'}
                    name='surname'
                    onBlur={handleBlur}
                    onChange={handleChange}/>
            </div>

            <Input
                customInputClass={'register-input register-input-email'}
                value={email}
                showErrors={showErrors}
                error={emailError}
                placeholder="Email"
                type={'text'}
                name='email'
                onBlur={handleBlur}
                onChange={handleChange}/>

            <Input
                customInputClass={'register-input register-input-password'}
                value={password}
                showErrors={showErrors}
                error={passwordError}
                placeholder="Password (Min 4 chars)"
                type={'password'}
                name='password'
                onBlur={handleBlur}
                onChange={handleChange}/>

            <Button
                name={'register-btn'}
                onClick={handleRegister}
                onKeyDown={(event) => handleKeyDown(event, 'register')}>
                {
                    activeUser ?
                        'Update' :
                        'Register'
                }
            </Button>
        </div>
    )
}

export {ModalContent};