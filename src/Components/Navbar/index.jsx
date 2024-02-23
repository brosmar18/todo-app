import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { IconMenu2, IconX } from '@tabler/icons-react';
import { motion } from 'framer-motion';
import './Navbar.scss';
import { logo } from '../../assets';

const Navbar = () => {
    const [toggle, setToggle] = useState(false);

    return (
        <div className='nav' data-testid="navbar">
            <div className='logo'>
                <img src={logo} alt='logo' data-testid="navbar-logo" />
            </div>
            <ul className='nav__links' data-testid="navbar-links">
                {['home', 'tasks', 'calendar', 'account'].map((link) => (
                    <li key={`link-${link}`} data-testid={`navbar-link-${link}`}>
                        <NavLink className='nav__link' to={link === 'home' ? '/' : `/${link}`}>
                            {link}
                        </NavLink>
                    </li>
                ))}
            </ul>
            <div className='nav__mobile'>
                <IconMenu2 onClick={() => setToggle(true)} data-testid="navbar-menu-icon" />

                {toggle && (
                    <motion.div
                        whileInView={{ x: [300, 0] }}
                        transition={{ duration: 0.85, ease: 'easeOut' }}
                        data-testid="navbar-mobile-menu"
                    >
                        <IconX onClick={() => setToggle(false)} data-testid="navbar-close-icon" />
                        <ul>
                            {['home', 'tasks', 'calendar', 'account'].map((link) => (
                                <li key={`mobile-link-${link}`} data-testid={`navbar-mobile-link-${link}`}>
                                    <NavLink
                                        className='nav__link'
                                        to={link === 'home' ? '/' : `/${link}`}
                                        onClick={() => setToggle(false)}
                                    >
                                        {link}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </div>
        </div>
    );
}

export default Navbar;
