'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Header.module.scss';

export const Header: React.FC = () => {
  const pathname = usePathname();

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/*FIXME: move routes into constants*/}
        <Link href="/" className={styles.logo}>
          <span className={styles.logoText}>Fake Store</span>
        </Link>
        <nav className={styles.nav}>
          <Link
            href="/users"
            className={`${styles.navLink} ${pathname === '/users' ? styles.active : ''}`}
          >
            Users
          </Link>
        </nav>
      </div>
    </header>
  );
};
