import React, {useState} from 'react';
import ticket from "./ticket.png";
import log_out from "./log-out.png";
import user from "./user.png"
import classes from "./HomeMenu.module.css"
import { useAuth } from '../../contexts/AuthContext';
import {useNavigate} from 'react-router-dom';

export default function HomeMenu() {
    const [error,setError] = useState("");
    const {currentUser, logOut} = useAuth();
    const history = useNavigate();
    async function handleLogOut(){
        setError('')

        try{
            await logOut()
            history("/");
        } catch{
            setError("Failed to log out")
        }
    }

  return (
    <div className={classes.home_menu}>
        <div className={classes.home_menu_logo}>
                <h1>RaffleVerse</h1>
        </div>
        <div className={classes.home_menu_links}>
            <div className={classes.home_menu_link}>
                <img src={user} alt="user"/>
                <h3>My profile</h3>
            </div>
            <div className={classes.home_menu_link}>
                <img src={ticket} alt="ticket"/>
                <h3>My tickets</h3>
            </div>
            <div className={classes.home_menu_link}>
                <img src={log_out} alt="log-out"/>
                <button onClick={handleLogOut}><h3>Log Out</h3></button>
            </div>
        </div>
    </div>
  )
}
