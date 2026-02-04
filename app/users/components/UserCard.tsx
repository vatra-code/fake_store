"use client";

import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";

import { User } from "@/types/user";
import { Card } from "@/components/ui/Card";
import { isSafeAvatarUrl } from "@/lib/utils";

import styles from "./UserCard.module.scss";
interface UserCardProps {
  user: User;
}

const AVATAR_LOAD_TIMEOUT_MS = 3000;

export const UserCard: React.FC<UserCardProps> = ({ user }) => {
  const [hasImageError, setHasImageError] = useState(false);
  const loadTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (hasImageError || !user.avatar || !isSafeAvatarUrl(user.avatar)) {
      return;
    }

    const id = setTimeout(() => {
      setHasImageError(true);
    }, AVATAR_LOAD_TIMEOUT_MS);
    
    loadTimeoutRef.current = id;
    
    return () => {
      clearTimeout(id);
      loadTimeoutRef.current = null;
    };
  }, [hasImageError, user.avatar, isSafeAvatarUrl]);

  const onAvatarError = () => {
    if (loadTimeoutRef.current) {
      clearTimeout(loadTimeoutRef.current);
      loadTimeoutRef.current = null;
    }
    setHasImageError(true);
  };

  const onAvatarLoad = ()  => {
    if (loadTimeoutRef.current) {
      clearTimeout(loadTimeoutRef.current);
      loadTimeoutRef.current = null;
    }
  };

  return (
    <Card className={styles.userCard}>
      <div className={styles.avatarContainer}>
        <div className={styles.avatarWrapper}>
          <Image
            src={(hasImageError) ? '/avatar.svg' : user.avatar}
            alt={`${user.name}'s avatar`}
            width={80}
            height={80}
            className={styles.avatar}
            unoptimized
            onError={onAvatarError}
            onLoad={onAvatarLoad}
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
