'use client';

import Link from 'next/link';
import React from 'react';
import ActiveLink from '../active-link/ActiveLink';

const navItems = [
  { path: '/abaout', text: 'Abaout' },
  { path: '/pricing', text: 'Pricing' },
  { path: '/contact', text: 'Contact' },
];

export const Navbar = () => {
  return (
    <nav className="flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded">
      <span>Home</span>
      <div className="flex flex-1"></div>
     {
      navItems.map (navItem =>(
        <ActiveLink key={navItem.path}{ ...navItem}/>
      ))
      }     
    </nav>
  );
};
