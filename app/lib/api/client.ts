import { User } from '@/types/user';

const API_BASE_URL = '/api';

export interface GetUsersParams {
  limit?: number;
}

export async function getUsers(params?: GetUsersParams): Promise<User[]> {
  const searchParams = new URLSearchParams();
  
  if (params?.limit !== undefined) {
    searchParams.set('limit', params.limit.toString());
  }

  const queryString = searchParams.toString();
  const url = queryString 
    ? `${API_BASE_URL}/users?${queryString}`
    : `${API_BASE_URL}/users`;

  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    cache: 'no-store',
    // FIXME: Add AbortSignal to fetch
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch users: ${response.statusText}`);
  }

  // TODO: return await response.json() as User[] is the same;
  const users: User[] = await response.json();
  return users;
}

