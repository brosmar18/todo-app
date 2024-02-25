import { Avatar } from "@mantine/core";
import { logo } from '../../assets';
import { Link } from 'react-router-dom';
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
        <nav className="h-24 flex items-center justify-between px-4 md:px-12 lg:px-20 xl:px-48">
            <div className="hidden md:flex justify-between w-full">
                <Link to='/'>
                    <img src={logo} alt="logo" className="w-[50px] h-[50px]" />
                </Link>
                <div className="flex items-center gap-2">
                    <Avatar size='lg' />
                    <IconBell size={30} />
                    <button className="px-5 rounded-md py-2.5 bg-blue-700 hover:bg-blue-800 text-white font-bold"> Log In</button>
                </div>
            </div>
            <div className="md:hidden flex justify-end w-full">
                <button className="w-10 h-8 flex flex-col justify-between items-center z-10 relative" onClick={() => setToggle(!toggle)}>
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
                    className="absolute top-0 right-0 w-[80%] h-screen bg-gray-400 text-white flex flex-col items-center justify-center gap-8"
                >
                    <Link to='/' onClick={() => setToggle(!toggle)}>
                        <img src={logo} alt="logo" className="w-[50px] h-[50px]" />
                    </Link>
                    <div className="flex items-center gap-2">
                        <Avatar size='lg' />
                        <IconBell size={30} />
                        <button className="px-5 rounded-md py-2.5 bg-blue-700 hover:bg-blue-800 text-white font-bold"> Log In</button>
                    </div>
                </motion.div>
            )
            }
        </nav >
    )
}

export default Navbar;