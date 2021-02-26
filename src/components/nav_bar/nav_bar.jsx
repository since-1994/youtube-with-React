import React, { useRef } from 'react';
import styles from './nav_bar.module.css';

const NavBar = ({search, goHome}) => {
    const inputRef = useRef();
    const onSubmit = (e) => {
        e.preventDefault();
        search(inputRef.current.value);
    }
    const home = () => {
        goHome();
    }
    
    return (
        <nav className = {styles.nav}>
            <div className = {styles.logo} onClick={home}>
                <i className="fab fa-youtube"></i>
                <h1>YouTube</h1>
            </div>
            <form onSubmit= {onSubmit} className = {styles.search}>
                <input ref={inputRef} type="text"/>
                <button><i className="fas fa-search"></i></button>
            </form>
        </nav>
    );
}

export default NavBar;