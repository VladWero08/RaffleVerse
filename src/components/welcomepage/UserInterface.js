import React from 'react'
import classes from "./UserInterface.module.css";
import ticket from "./ticket.png";

export default function UserInterface() {
  return (
    <div className={classes.home_layout}>
        <div className={classes.home_rules}>
            <h1>Welcome to RaffleVerse!</h1>
            <h2>We want to offer you the opportunity to <span className={classes.highlight}>test your luck</span> and maybe <span className={classes.highlight}>make a sweet profit</span>, but, first of all, here are some rules about our raffles:</h2>
            <p>1. <strong>You are able to purchase one ticket/raffle.</strong> You have the same chance of winning as the rest of the participants.</p>
            <p>2. <strong>The raffle will end as soon as the host decides to.</strong> This feature will determine each player's chance of winning, more participants, less chances or viceversa.</p>
            <p>3. <strong>You will be notified on your email if you win.</strong> As soon as the raffle ends, you will receive an email if you won and the money will arrive into your MetaMask account.</p>
        </div>
            
        <div className={classes.home_live_raffle_name}>
            <h1>LuckyMonekeys</h1>
            <h4>landed on<br/>18.03.2022</h4>
            <div className={classes.buy_ticket}>
                <img src={ticket} alt="ticket"/>
                <h3>Buy a ticket:</h3>
                <button>+</button>
            </div>
        </div>

        <div className={classes.home_live_raffle_info}>
            <h2>💰 Raffle value:</h2>
            <h3>#️⃣ Tickets sold:</h3>
        </div>

        <div className={classes.home_last_raffle_name}>
            <div className={classes.transparent}>
                <h3>LuckyMonsters</h3>
                <h4>18.02.2022</h4>
            </div>
        </div>
        <div className={classes.home_last_raffle_info}>
            <h3>🏆 Winner: </h3>
            <h3>💰 Raffle Value:</h3>
            <h3>#️⃣ Tickets sold:</h3>
        </div>

        <span className={classes.last_raffle_text}>LAST<br/>RAFFLE</span>
    </div>
  )
}
