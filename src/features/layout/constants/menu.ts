import { NavbarMenuItem } from "@/features/layout/type";

export const NAVBAR_DROPDOWN_MENU: NavbarMenuItem[] = [
  { label: 'Profile', href: '/profile?tab=profile', roles: ['USER'] },

  // USER
  { label: 'Borrowed List', href: '/profile?tab=borrowed', roles: ['USER'] },
  { label: 'Review', href: '/profile?tab=reviews', roles: ['USER'] },

  // ADMIN
  { label: 'Books', href: '/admin?tab=books', roles: ['ADMIN'] },
  { label: 'Loans', href: '/admin?tab=borrowed', roles: ['ADMIN'] },
    { label: 'User', href: '/admin?tab=users', roles: ['ADMIN'] },
];