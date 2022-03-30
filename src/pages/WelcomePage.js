import { useState } from 'react';
import LogoText from "../components/logsign/LogoText";
import SignUp from "../components/logsign/SignUp";
import LogIn from "../components/logsign/LogIn";

import classes from "./WelcomePage.module.css";

function WelcomePage(props){
    const [logSign, setLogSign] = useState(true);

    return (
        <div className={classes.container}>
            <div className={classes.log_sign}>
                <LogoText 
                    changeLogSign={logSign => setLogSign(logSign)} 
                    logSignState={logSign}
                    isLogSignActive={"Log in"}
                />
                {logSign ? <LogIn/> : <SignUp/>}
            </div>
        </div>
    );
}

export default WelcomePage;