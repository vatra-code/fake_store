export const ROUTES = {
    HOME: '/',
    USERS: '/users',
    PRODUCTS: '/products',
} as const;

export const NAV_LINKS = [
    { href: ROUTES.HOME, label: 'Fake Store', isLogo: true },
    { href: ROUTES.USERS, label: 'Users', isLogo: false },
    { href: ROUTES.PRODUCTS, label: 'Products', isLogo: false },
  ] as const;