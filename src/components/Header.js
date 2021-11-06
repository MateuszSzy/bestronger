import React, {useEffect, useState} from 'react';
import classes from "./Header.module.scss";
import {BiMenuAltRight} from "react-icons/bi";
import {AiOutlineClose} from "react-icons/ai";
import {Link} from "react-router-dom";
import {useNavigate} from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();
    const [menuOpen,setMenuOpen] = useState(false);
    const [size, setSize] = useState({
        width: undefined,
        height: undefined,
    });

    useEffect(() =>{
        const handleResize = () =>{
            setSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };
        window.addEventListener("resize",handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        if (size.width >768 && menuOpen) {
            setMenuOpen(false);
        }
    }, [size.width, menuOpen]);

    const menuToggleHandler = () => {
        setMenuOpen((p) => !p);
    };

    const signUpClickHandler = () => {
        menuToggleHandler();
        navigate('/Signup');
    };

    return(
        <header className={classes.header}>
            <div className={classes.header__content}>
                <Link to="/" className={classes.header__content__logo}>
                    BeStronger
                </Link>

                <nav className={`${classes.header__content__nav} ${menuOpen && size.width < 768 ? classes.isMenu : ""}`}>
                    <ul>
                        <li>
                            <Link to="/Whyus" onClick={menuToggleHandler}>Why Us</Link>
                        </li>
                        <li>
                            <Link to="/Packages" onClick={menuToggleHandler}>Packages</Link>
                        </li>
                        <li>
                            <Link to="/Watercalc" onClick={menuToggleHandler}>Water Calc</Link>
                        </li>
                    </ul>
                    <button onClick={signUpClickHandler}>Sign up</button>
                </nav>
                <div className={classes.header__content__toggle}>
                    {!menuOpen ? (
                        <BiMenuAltRight onClick={menuToggleHandler} />
                    ) : (
                        <AiOutlineClose onClick={menuToggleHandler} />
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;