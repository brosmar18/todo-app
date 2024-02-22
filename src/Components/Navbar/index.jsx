import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { IconMenu2 } from '@tabler/icons-react';
import { IconX } from '@tabler/icons-react';
import { motion } from 'framer-motion';
import './Navbar.scss';
import { logo } from '../../assets';

const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    return (
        <div className='nav'>
            <div className='logo'>
                <img src={logo} alt='logo' />
            </div>
            <ul className='nav__links'>
                {['home', 'tasks', 'calendar', 'account'].map((link) => (
                    <li key={`link-${link}`}>
                        <div />
                        <NavLink className='nav__link' to={link === 'home' ? '/' : `/${link}`}>
                            {link}
                        </NavLink>
                    </li>
                ))}
            </ul>
            <div className='nav__mobile'>
                <IconMenu2 onClick={() => setToggle(true)} />

                {toggle && (
                    <motion.div
                        whileInView={{ x: [300, 0] }}
                        transition={{ duration: 0.85, ease: 'easeOut' }}
                    >
                        <IconX onClick={() => setToggle(false)} />
                        <ul>
                            {['home', 'tasks', 'calendar', 'account'].map((link) => (
                                <li key={`link-${link}`}>
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
    )
}

export default Navbar