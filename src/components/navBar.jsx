import React, { Component } from 'react';
import styles from './navBar.module.css';

class NavBar extends Component {
    render() {
        return (
            <nav className = {styles.navbar}>
                <div className={styles.logo}>
                    <div className ={styles.icon}>
                        <i className="fab fa-youtube"></i>
                    </div>
                    <span>YouTube</span>
                </div>
                <div className={styles.search}>
                    <input type="text"/>
                    <button><i className="fas fa-search"></i></button>
                </div>
            </nav>
        );
    }
}

export default NavBar;