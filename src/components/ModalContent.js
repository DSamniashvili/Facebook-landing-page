import React, {useState} from 'react';
import {Input} from "./generic-components/Input";
import {Button} from "./generic-components/Button";

import '../styles/LoginRegisterContainer.scss';
import '../styles/RegistrationContainer.scss';

const initialState = {
    name: "",
    surname: "",
    email: "",
    password: "",
}

const ModalContent = ({closeModal}) => {

    // const [name, setName] = useState('');
    // const [surname, setSurname] = useState('');
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');

    const [state, setState] = useState(initialState);


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

    const handleRegister = () => {
        // dispatch an action
        // move user to success screen

        console.log('handleRegister', state);
        setState(initialState);

        closeModal();
    }

    const handleChange = (event, name) => {
        const val = event.target && event.target.value && event.target.value.trim();
        setState({
            ...state,
            [name]: val,
        });
    }
    const {name, surname, email, password } = state;

    return (
        <div className={'registration-container'}>
            <div className="name-and-surname-inputs-container">
                <Input
                    customInputClass={'register-input register-input-name'}
                    value={name}
                    placeholder="Name"
                    type={'text'}
                    name='name'
                    secureTextEntry
                    onChange={handleChange}/>

                <Input
                    customInputClass={'register-input register-input-surname'}
                    value={surname}
                    placeholder="Surname"
                    type={'text'}
                    name='surname'
                    secureTextEntry
                    onChange={handleChange}/>
            </div>

            <Input
                customInputClass={'register-input register-input-email'}
                value={email}
                placeholder="Email"
                type={'text'}
                name='email'
                secureTextEntry
                onChange={handleChange}/>

            <Input
                customInputClass={'register-input register-input-password'}
                value={password}
                placeholder="Password"
                type={'password'}
                name='password'
                onChange={handleChange}/>

            <Button
                name={'register-btn'}
                onClick={handleRegister}
                onKeyDown={(event) => handleKeyDown(event, 'register')}>
                Register
            </Button>
        </div>
    )
}

export {ModalContent};