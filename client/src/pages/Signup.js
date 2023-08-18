import React, { useState } from 'react';
import stackoverflowLogo from "../assets/stackoverflowLogo.svg";
import OAuth from "../components/OAuth";
import { useSelector, useDispatch } from 'react-redux';
import { setUsername, setEmail, setPassword, setGender, setPhone, setNick, submitAccount } from '../actions/signupAction';
import './Signup.css';


const SignUp = () => {
    const username = useSelector((state) => state.username);
    const email = useSelector((state) => state.email);
    const password = useSelector((state) => state.password);
    const gender = useSelector((state) => state.gender);
    const phone = useSelector((state) => state.phone);
    const nick = useSelector((state) => state.nick);

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

    const handleGenderChange = (event) => {
        const selectedGender = event.target.value;
        console.log('Selected gender:', selectedGender);
        dispatch(setGender(selectedGender));
    }

    const handlePhoneChange = (event) => {
        dispatch(setPhone(event.target.value));
    }

    const handleNickChange = (event) => {
        dispatch(setNick(event.target.value));
    }

    const handleSubmit = () => {
        dispatch(submitAccount());
    }   

    return (
        <div className='Signup-Wrapper'>
            <img src={stackoverflowLogo} alt="stackoverflow" className="mainlogo" />
            <OAuth />
            <div className='Signup-Box'>
                <div className='Category-Text'>회원가입</div>
                <div className='Username-Wrapper'>
                    <p className='Signup-Title'>Username</p>
                    <input className='Username-Input'
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={handleUsernameChange}
                    />
                </div>

                <div className='Gender-Wrapper'>
                    <p className='Signup-Title'>Gender</p>
                    <div className='Gender-Group'>
                        <label className='Gender-Label'>
                        <input
                            type="radio"
                            name="gender"
                            value="male"
                            onChange={handleGenderChange}
                        />
                        Male
                        </label>
                        <label className='Gender-Label'>
                        <input
                            type="radio"
                            name="gender"
                            value="female"
                            onChange={handleGenderChange}
                        />
                        Female
                        </label>
                    </div>
                </div>

                <div className='Phone-Wrapper'>
                    <p className='Signup-Title'>Phone</p>
                    <input className='Phone-Input'
                        type="text"
                        placeholder="Phone"
                        value={phone}
                        onChange={handlePhoneChange}
                    />
                </div>
            
                <div className='Email-Wrapper'>
                    <p className='Signup-Title'>Email</p>
                    <input className='Email-Input'
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={handleEmailChange}
                    />
                </div>

                <div className='Nick-Wrapper'>
                    <p className='Signup-Title'>Nickname</p>
                    <input className='Nick-Input'
                        type="text"
                        placeholder="Nickname"
                        value={nick}
                        onChange={handleNickChange}
                    />
                </div>
            
                <div className='Password-Wrapper'>
                    <p className='Signup-Title'>Password</p>
                    <input className='Password-Input'
                        type="password"
                        placeholder="passoword"
                        value={password}
                        onChange={handlePasswordChange}
                    />
                </div>
            
                <div className='Btn-Wrapper'>
                    <button className='Btn-Submit' onClick={handleSubmit}>Signup</button>
                </div>
            </div>                        
        </div>
    );
};

export default SignUp;