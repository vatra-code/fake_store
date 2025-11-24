import React from 'react';
import { User } from '@/types/user';
import { UserCard } from './UserCard';
import styles from './UserList.module.scss';

interface UserListProps {
  users: User[];
}

export const UserList: React.FC<UserListProps> = ({ users }) => {
  if (users.length === 0) {
    return (
      <div className={styles.emptyState}>
        <p className={styles.emptyText}>No users found</p>
      </div>
    );
  }

  return (
    <div className={styles.userList}>
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
};

