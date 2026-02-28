import { NavbarMenuItem } from "@/features/layout/type";

export const NAVBAR_DROPDOWN_MENU: NavbarMenuItem[] = [
  { label: 'Profile', href: '/profile', roles: ['USER', 'ADMIN'] },

  // USER
  { label: 'My Loans', href: '/loans', roles: ['USER'] },

  // ADMIN
  { label: 'Admin • Books', href: '/admin/books', roles: ['ADMIN'] },
  { label: 'Admin • Loans', href: '/admin/loans', roles: ['ADMIN'] },
];