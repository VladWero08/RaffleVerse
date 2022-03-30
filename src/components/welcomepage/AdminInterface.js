import React from 'react'
import classes from "./AdminInterface.module.css";

export default function AdminInterface() {
  return (
        <div className={classes.admin_layout}>
            <div className={classes.admin_statistics}>
                <h1>Current raffle:</h1>
                <h1>RAFFLE NAME</h1>
                <h2>RAFFLE VALUE</h2>
                <div className={classes.admin_last_participants}>
                    <h1>Name: address</h1>
                    <h1>Name: address</h1>
                    <h1>Name: address</h1>
                    <h1>Name: address</h1>
                    <h1>Name: address</h1>
                </div>
                <button className={classes.btn_create_raffle}>END RAFFLE</button>
            </div>
            <div className={classes.admin_last_3_raffles}>
                <h1>Last three raffles:</h1>
                <div className={classes.last_raffles_stats}>
                    <div className={classes.last_raffles_value}>
                        <h2>Value:</h2>
                        <h3>100 matic</h3>
                        <h3>100 matic</h3>
                        <h3>100 matic</h3>
                    </div>
                    <div className={classes.last_raffles_profit}>
                        <h2>Profit:</h2>
                        <h3>100 matic</h3>
                        <h3>100 matic</h3>
                        <h3>100 matic</h3>
                    </div>
                </div>
            </div>
            <div className={classes.admin_create_raffle}>
                <h1>Create a new raffle:</h1>
                <form className={classes.new_raffle_form}>
                    <label for="form_name">Name:</label>
                    <input type="text" placeholder="Enter raffle name" id="form_name"/>

                    <label for="form_price">Ticket price:</label>
                    <input type="text" placeholder="Enter ticket price" id="form_price"/>

                    <button type="submit" className={classes.btn_create_raffle}>Create</button>
                </form>
            </div>
        </div>
  )
}
