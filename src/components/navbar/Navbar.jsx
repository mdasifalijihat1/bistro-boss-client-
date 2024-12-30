import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom'; 
import { Menu, Transition } from '@headlessui/react'; 
import { Fragment } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'; 

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const classNames = (...classes) => classes.filter(Boolean).join(' ');

    return (
        <nav className="bg-black fixed top-0 z-10 bg-opacity-30 text-white p-4 container mx-auto">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo Section */}
                <div className="flex items-center">
                    <Link to={'/'}>
                        <span className="text-2xl font-bold">BISTRO BOSS</span>
                        <span className="ml-2 text-sm hidden sm:block">RESTAURANT</span>
                    </Link>
                </div>

                {/* Desktop Navigation Links */}
                <div className="hidden lg:flex space-x-6 items-center">
                    <NavLink to="/" className={({ isActive }) => (isActive ? "text-yellow-500" : "hover:text-yellow-400")}>HOME</NavLink>
                    <NavLink to="/contact" className={({ isActive }) => (isActive ? "text-yellow-500" : "hover:text-yellow-400")}>CONTACT US</NavLink>
                    <NavLink to="/dashboard" className={({ isActive }) => (isActive ? "text-yellow-500" : "hover:text-yellow-400")}>DASHBOARD</NavLink>
                    <NavLink to="/menu" className={({ isActive }) => (isActive ? "text-yellow-500" : "hover:text-yellow-400")}>OUR MENU</NavLink>

                    {/* Dropdown for "OUR SHOP" */}
                    <Menu as="div" className="relative">
                        <Menu.Button className="inline-flex items-center px-4 py-2 text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500">
                            OUR SHOP
                        </Menu.Button>
                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                        >
                            <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                <Menu.Item>
                                    {({ active }) => (
                                        <a
                                            href="#"
                                            className={classNames(
                                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                'block px-4 py-2 text-sm'
                                            )}
                                        >
                                            Shop Item 1
                                        </a>
                                    )}
                                </Menu.Item>
                                <Menu.Item>
                                    {({ active }) => (
                                        <a
                                            href="#"
                                            className={classNames(
                                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                'block px-4 py-2 text-sm'
                                            )}
                                        >
                                            Shop Item 2
                                        </a>
                                    )}
                                </Menu.Item>
                            </Menu.Items>
                        </Transition>
                    </Menu>

                    {/* Login and Register Links */}
                    <NavLink to="/login" className="hover:text-yellow-400">Login</NavLink>
                    <NavLink to="/register" className="hover:text-yellow-400">Register</NavLink>
                </div>

                {/* Mobile Menu Button */}
                <div className="lg:hidden">
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="text-white hover:text-gray-400"
                        aria-expanded={isMobileMenuOpen}
                    >
                        {isMobileMenuOpen ? (
                            <XMarkIcon className="h-6 w-6" />
                        ) : (
                            <Bars3Icon className="h-6 w-6" />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="lg:hidden bg-black text-white w-full p-4 max-h-[calc(100vh-4rem)] overflow-y-auto">
                    <ul className="space-y-4">
                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive }) => (isActive ? "text-yellow-500" : "hover:text-yellow-400")}
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                HOME
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/contact"
                                className={({ isActive }) => (isActive ? "text-yellow-500" : "hover:text-yellow-400")}
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                CONTACT US
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/dashboard"
                                className={({ isActive }) => (isActive ? "text-yellow-500" : "hover:text-yellow-400")}
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                DASHBOARD
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/menu"
                                className={({ isActive }) => (isActive ? "text-yellow-500" : "hover:text-yellow-400")}
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                OUR MENU
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/shop"
                                className={({ isActive }) => (isActive ? "text-yellow-500" : "hover:text-yellow-400")}
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                OUR SHOP
                            </NavLink>
                        </li>
                    </ul>
                    <div className="mt-6">
                        <NavLink to="/login" className="block py-2 text-center text-white hover:text-yellow-400" onClick={() => setIsMobileMenuOpen(false)}>Login</NavLink>
                        <NavLink to="/register" className="block py-2 text-center text-white hover:text-yellow-400" onClick={() => setIsMobileMenuOpen(false)}>Register</NavLink>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
