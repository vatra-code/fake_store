import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function isSafeAvatarUrl(url: string) {
  if (typeof url !== 'string' || !url.trim()) {
    return false;
  }
  try {
    const parsed = new URL(url);
    const protocol = parsed.protocol.toLocaleLowerCase();

    if (protocol === 'http:' || protocol === 'https:') {
      return true;
    }
    
    if (protocol === 'data:') {
      return url.trim().toLowerCase().startsWith('data:image/');
    }
    
    return false;
  } catch {
    return false;
  }
}
