import { Avatar } from "@mantine/core";
import { logo } from '../../assets';
import { Link, NavLink } from 'react-router-dom';
import { IconBell, IconUsers, IconHome, IconMenu2 } from '@tabler/icons-react';
import { useState } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
    const [toggle, setToggle] = useState(false);

    const topVariants = {
        closed: {
            rotate: 0
        },
        opened: {
            rotate: 45,
            backgroundColor: "rgb(255, 255, 255)"
        }
    };


    const centerVariants = {
        closed: {
            opacity: 1
        },
        opened: {
            opacity: 0
        }
    };

    const bottomVariants = {
        closed: {
            rotate: 0
        },
        opened: {
            rotate: -45,
            backgroundColor: 'rgb(255, 255, 255)'
        }
    };

    const listVariants = {
        closed: {
            opacity: 0,
            transition: {
                when: "afterChildren"
            }
        },
        opened: {
            opacity: 1,
            transition: {
                when: "beforeChildren",
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        },
    };

    const listItemVariants = {
        closed: {
            y: 20,
            opacity: 0,
            transition: {
                duration: 0.2
            }
        },
        opened: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.4
            }
        }
    };

    return (
        <nav className="flex items-center justify-between px-4 py-2.5 sm:px-12 lg:px-20 xl:px-48">
            <div className="hidden sm:flex justify-between w-full">
                <Link to='/'>
                    <img src={logo} alt="logo" className="w-[50px] h-[50px]" />
                </Link>
                <ul className="flex items-center gap-5 uppercase">
                    {['home', 'tasks', 'settings', 'calendar'].map((link) => (
                        <li key={`link-${link}`}>
                            <NavLink to={link === 'home' ? '/' : `/${link}`} >
                                {link}
                            </NavLink>
                        </li>
                    ))}
                </ul>
                <div className="flex items-center gap-2">
                    <Avatar size='md' src='https://i.pravatar.cc/300' />
                    <IconBell size={30} />
                    <button className="px-5 rounded-sm py-2.5 bg-blue-700 hover:bg-blue-800 text-white font-bold"> Log In</button>
                </div>
            </div>
            <div className="sm:hidden flex justify-end w-full">
                <button className="w-10 h-8 flex flex-col justify-between items-center z-30 relative" onClick={() => setToggle(!toggle)}>
                    <motion.div
                        variants={topVariants}
                        animate={toggle ? "opened" : "closed"}
                        className="w-10 h-[3px] bg-black rounded origin-left"
                    />
                    <motion.div
                        variants={centerVariants}
                        animate={toggle ? "opened" : "closed"}
                        className="w-10 h-[3px] bg-black rounded"
                    />
                    <motion.div
                        variants={bottomVariants}
                        animate={toggle ? "opened" : "closed"}
                        className="w-10 h-[3px] bg-black rounded origin-left"
                    />
                </button>
            </div>
            {toggle && (
                <motion.div
                    variants={listVariants}
                    initial='closed'
                    animate='opened'
                    className="absolute top-0 right-0 w-[80%] h-screen bg-gray-400 text-white flex flex-col items-center justify-center gap-8 z-20"
                >
                    <Link to='/' onClick={() => setToggle(!toggle)}>
                        <img src={logo} alt="logo" className="w-[50px] h-[50px]" />
                    </Link>
                    <ul className="flex items-center gap-5 uppercase">
                        {['home', 'tasks', 'settings', 'calendar'].map((link) => (
                            <li key={`link-${link}`}>
                                <NavLink to={link == 'home' ? '/' : `/${link}`} onClick={() => setToggle(false)}>
                                    {link}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                    <div className="flex items-center gap-2">
                        <Avatar size='md' src='https://i.pravatar.cc/300' />
                        <IconBell size={30} />
                        <button className="px-5 rounded-sm py-2.5 bg-blue-700 hover:bg-blue-800 text-white font-bold"> Log In</button>
                    </div>
                </motion.div>
            )
            }
        </nav >
    )
}

export default Navbar;