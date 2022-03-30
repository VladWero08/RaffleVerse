import classes from "./LogSign.module.css";
import errorMsg from "./sad-face.png";
import {useRef, useState} from 'react';
import {useAuth} from '../../contexts/AuthContext';
import {useNavigate} from 'react-router-dom';
import LogoText from "./LogoTextLog";

function LogIn(){
    const emailRef = useRef();
    const passRef = useRef();

    const { logIn } = useAuth();
    const [authError,setAuthError] = useState('');
    const [loading,setLoading] = useState(false);
    const [passwordShow, setPasswordShow] = useState(false);
    const history = useNavigate()

    async function handleSubmit(e){
        e.preventDefault();

        try{
            setAuthError('')
            setLoading(true)
            await logIn(emailRef.current.value, passRef.current.value)
            history("/homepage");
        } catch{
            setAuthError('We failed to log you in.')
        }
        setLoading(false)
        
    }

    function displayErrorMessage(message){
        if(message !== ''){
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
    
    return (
        <div className={classes.container}>
            <div className={classes.log_sign}>
                <LogoText logSignState="true"/>
                <div className={classes.log_sign_right}>
                    <form className={classes.log_sign_form} onSubmit={handleSubmit}>
                        <label htmlFor="form_name">Email address</label>
                        <input type="text" placeholder="Enter your email" id="form_email" ref={emailRef} required/>
                            
                        <label htmlFor="form_name">Password</label>
                        <input type={passwordShow ? "text" : "password"} placeholder="Enter password" id="form_pass" ref={passRef} required/>
                        <div className={classes.form_checkbox}>
                            <input type="checkbox" id="pass_checkbox" onClick={passwordShowHandler}/>
                            <span>Show password</span>
                        </div>
                        <button disabled={loading} className={classes.btn_log_sign}>LOG IN</button>
                        {displayErrorMessage(authError)}
                    </form>
                </div>
            </div>
        </div>
    );
}

export default LogIn;

