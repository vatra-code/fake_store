import { User } from '@/types/user';

const API_BASE_URL = '/api';

export interface GetUsersParams {
  limit?: number;
  signal?: AbortSignal;
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
    headers: { 'Content-Type': 'application/json' },
    cache: 'no-store',
    signal: params?.signal,
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch users: ${response.statusText}`);
  }

  return await response.json() as User[];
}

