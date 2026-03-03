import { NavbarMenuItem } from "@/features/layout/type";

export const NAVBAR_DROPDOWN_MENU: NavbarMenuItem[] = [
  { label: 'Profile', href: '/profile?tab=profile', roles: ['USER', 'ADMIN'] },

  // USER
  { label: 'Borrowed List', href: '/profile?tab=borrowed', roles: ['USER'] },
  { label: 'Review', href: '/profile?tab=reviews', roles: ['USER'] },

  // ADMIN
  { label: 'Admin • Books', href: '/admin/books', roles: ['ADMIN'] },
  { label: 'Admin • Loans', href: '/admin/loans', roles: ['ADMIN'] },
];