import React from 'react';
import ReactDOM from 'react-dom/client';
import styles from './styles.module.css';
import pic1 from './images/wheel.gif';

function Construct() {
    return(
        <home>
            <div className={styles.whoops}>
                Page currently under construction. Try again later.
                <img src={pic1} alt="spinning wheel"/>
            </div>
        </home>
    );
};


export default Construct;