'use client';

import React from 'react';
import { UserList } from '@/features/users/components/UserList';
import { Pagination } from '@/components/ui/Pagination';
import { useUsers } from '@/features/users/hooks/useUsers';
import styles from './page.module.scss';

// TODO: Fix project structure - page is in app/users/ while feature logic is in app/features/users/
export default function UsersPage() {
  const {
    users,
    loading,
    error,
    currentPage,
    totalPages,
    hasNextPage,
    hasPreviousPage,
    goToPage,
    nextPage,
    previousPage,
  } = useUsers({ pageSize: 12 });

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        {loading && (
          <div className={styles.loadingState}>
            <div className={styles.spinner}></div>
            <p className={styles.loadingText}>Loading users...</p>
          </div>
        )}
        {error && (
          <div className={styles.errorState}>
            <p className={styles.errorText}>Error: {error}</p>
          </div>
        )}
        {!loading && !error && (
          <>
            <UserList users={users} />
            {totalPages > 1 && (
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                hasNextPage={hasNextPage}
                hasPreviousPage={hasPreviousPage}
                onPageChange={goToPage}
                onNext={nextPage}
                onPrevious={previousPage}
              />
            )}
          </>
        )}
      </main>
    </div>
  );
}

