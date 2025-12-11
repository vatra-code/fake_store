import React from 'react';
import { User } from '@/types/user';
import { Card } from '@/components/ui/Card';
import styles from './UserCard.module.scss';
import Image from 'next/image';

interface UserCardProps {
  user: User;
}

export const UserCard: React.FC<UserCardProps> = ({ user }) => {
  return (
    <Card className={styles.userCard}>
      <div className={styles.avatarContainer}>
        <div className={styles.avatarWrapper}>
          {/* TODO: Add error handling for broken image URLs (onError handler or fallback image) */}
          {/* TODO: Validate avatar URL format before rendering to prevent Cross-Site Scripting) risks */}
          <Image
            src={user.avatar}
            alt={`${user.name}'s avatar`}
            width={80}
            height={80}
            className={styles.avatar}
            unoptimized
          />
        </div>
      </div>
      <div className={styles.content}>
        <h3 className={styles.name}>{user.name}</h3>
        <p className={styles.email}>{user.email}</p>
        <div className={styles.roleContainer}>
          <span className={styles.role}>{user.role}</span>
        </div>
      </div>
    </Card>
  );
};

