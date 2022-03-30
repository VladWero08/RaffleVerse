import classes from "./LogSign.module.css";
import {useRef, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {useAuth} from '../../contexts/AuthContext';

import errorMsg from "./sad-face.png";
import succesMsg from "./happy-face.png";

import LogoText from "./LogoTextSign";
function SignUp(){
    const emailRef = useRef();
    const nameRef = useRef();
    const passRef = useRef();
    const repassRef = useRef();
    const metamaskRef = useRef();

    const { signUp } = useAuth();
    const [authError,setAuthError] = useState('');
    const [loading,setLoading] = useState(false);
    const [passwordShow, setPasswordShow] = useState(false);
    const navigation = useNavigate();

    async function handleSubmit(e){
        e.preventDefault();

        if(passRef.current.value !== repassRef.current.value){
            return setAuthError('Passwords do not match')
        }

        if(defaultAccount === null){
            return setAuthError('You need to connect a MetaMask account.')
        }

        try{
            setLoading(true)
            await signUp(nameRef.current.value,emailRef.current.value, passRef.current.value,metamaskRef.current.value, "admin")
            setAuthError('Successful sign up.')
            navigation("/")
        } catch{
            setAuthError('We failed to create you an account.')
        }
        setLoading(false)  
    }

    function displayErrorMessage(message){
        if(message === "Successful sign up."){
            return (
                <div className={classes.success_message}>
                    <img src={succesMsg} alt="sad-face"/>
                    <span>{message}</span>
                </div>
            )
        }else if(message !== ''){
            return (
                <div className={classes.error_message}>
                    <img src={errorMsg} alt="sad-face"/>
                    <span>{message}</span>
                </div>
            )
        }
    }

    function passwordShowHandler(){
        setPasswordShow(!passwordShow);
    }

    const [errorMessage, setErrorMessage] = useState(null);
	const [defaultAccount, setDefaultAccount] = useState(null);
	const [connButtonText, setConnButtonText] = useState('Connect Wallet');

	const connectWalletHandler = () => {
		if (window.ethereum && window.ethereum.isMetaMask) {
			console.log('MetaMask Here!');

			window.ethereum.request({ method: 'eth_requestAccounts'})
			.then(result => {
				accountChangedHandler(result[0]);
				setConnButtonText('Wallet Connected');
                setErrorMessage(null);
			})
			.catch(error => {
				setErrorMessage(error.message);
			});

		} else {
			setErrorMessage('Please install MetaMask browser extension.');
		}
	}

    const accountChangedHandler = (newAccount) => {
		setDefaultAccount(newAccount);
	}

    return (
        <div className={classes.container}>
            <div className={classes.log_sign}>
                <LogoText logSignState="false"/>
                <div className={classes.log_sign_right}>
                    <form className={classes.log_sign_form} onSubmit={handleSubmit}>
                        <label htmlFor="form_name">Name</label>
                        <input type="text" placeholder="Enter your name" id="form_name" ref={nameRef} required/>
                        
                        <label htmlFor="form_email">Email address</label>
                        <input type="email" placeholder="Enter your email" id="form_email" ref={emailRef} required/>
                            
                        <label htmlFor="form_pass">Password</label>
                        <input type={passwordShow ? "text" : "password"} placeholder="Enter password" id="form_pass" ref={passRef} required/>
                        <div className={classes.form_checkbox}>
                            <input type="checkbox" id="pass_checkbox" onClick={passwordShowHandler}/>
                            <span>Show password</span>
                        </div>
                        
                        <label htmlFor="form_repass">Password again</label>
                        <input type="password" placeholder="Enter password again" id="form_repass" ref={repassRef} required/>
                        
                        <button type="button" onClick={connectWalletHandler} className={classes.btn_metamask}>{connButtonText}</button>
                        <input type="text" placeholder="Connect your MetaMask wallet" className={classes.form_wallet} ref={metamaskRef} value={defaultAccount}/>
                        <span className={classes.metamask_error}>{errorMessage}</span>
                            
                        <button disabled={loading} type="submit" className={classes.btn_log_sign}>SIGN UP</button>
                        {displayErrorMessage(authError)}
                    </form>
                </div>
            </div>
        </div>
    );
}

export default SignUp;