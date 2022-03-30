import classes from './LogoText.module.css';
import maticLogo from './matic.png';
import {Link} from 'react-router-dom';

function LogoTextSign(props){
    return (
        <div className={classes.log_sign_left}>
            <div className={classes.log_sign_glass}>
                <h1 className={classes.logo}>RaffleVerse</h1>
                <p>Have some <span><img className={classes.small_matic_logo} src={maticLogo} alt="matic"/></span> MATIC left in your wallet and don't know what to do with them? <br/><strong>Try your luck.</strong></p>
                <h4>Have an account already?</h4>
                <Link to="/">
                    <button className={classes.btn_sign_log_switch} >Log in</button>
                </Link>
            </div>
        </div>
    );
}

export default LogoTextSign;