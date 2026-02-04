export const ROUTES = {
    HOME: '/',
    USERS: '/users',
    PRODUCTS: '/products',
} as const;

export const NAV_LINKS = [
    { href: ROUTES.USERS, label: 'Users' },
    { href: ROUTES.PRODUCTS, label: 'Products' },
] as const;