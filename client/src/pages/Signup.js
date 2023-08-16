import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setUsername, setEmail, setPassword, submitAccount } from '../actions/signupAction';


const SignUp = () => {
    const username = useSelector((state) => state.username);
    const email = useSelector((state) => state.email);
    const password = useSelector((state) => state.password);
    const dispatch = useDispatch();

    const handleUsernameChange = (event) => {
        dispatch(setUsername(event.target.value));
    };

    const handleEmailChange = (event) => {
        dispatch(setEmail(event.target.value));
    };

    const handlePasswordChange = (event) => {
        dispatch(setPassword(event.target.value));
    };

    const handleSubmit = () => {
        dispatch(submitAccount(username, email, password));
    };

    const handleCancel = () => {
        dispatch(setUsername(''));
        dispatch(setEmail(''));
        dispatch(setPassword(''));
    };

    return (
        <div className='Signup-Wrapper'>
            <div className='Category-Text'>회원가입</div>
            <input className='Username-Input'
                type="text"
                placeholder="Username"
                value={username}
                onChange={handleUsernameChange}
            />
            <input className='Email-Input'
                type="email"
                placeholder="Email"
                value={email}
                onChange={handleEmailChange}
            />
            <input className='Password-Input'
                type="password"
                placeholder="passoword"
                value={password}
                onChange={handlePasswordChange}
            />
        <button onClick={handleSubmit}>Signup</button>
        <button onClick={handleCancel}>Cancel</button>                        
        </div>
    );
};

export default SignUp;