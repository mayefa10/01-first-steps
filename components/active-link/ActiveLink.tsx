'use client';
import Link from 'next/link';
import React from 'react'
import style from './ActiveLink.module.css';
import { usePathname } from 'next/navigation';

interface Props{
    path:string;
    text:string;
}
const ActiveLink = ({path, text}: Props) => {
    const pathName = usePathname()
  return (
    <Link  
    className={`${style.link} ${(pathName === path) && style['active-link']}`}
    href={path}>
    {text}</Link>
  )
}

export default ActiveLink