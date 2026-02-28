'use client';

import Link from 'next/link';
import { ChevronDown, Ghost, LogOut } from 'lucide-react';


import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { NAVBAR_DROPDOWN_MENU } from '@/features/layout/constants';
import { Button } from '@/components/ui/button';
import { NotificationButton } from '@/components/ui/notification';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { selectAuthUser, selectRole } from '@/features/auth/store';
import { useAppSelector } from '@/store/hooks';


export const UserMenu: React.FC = () => {
  const user = useAppSelector(selectAuthUser);
  const role = useAppSelector(selectRole);
  const menuItems = NAVBAR_DROPDOWN_MENU.filter((m) => m.roles.includes(role ?? 'USER'));

  const initials = user?.name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((x) => x[0]?.toUpperCase())
    .join('');

  return (
    <div className="flex items-center gap-6">
      <NotificationButton count={1} />

      <div className="flex items-center gap-4.5">
        <div className="flex items-center gap-2">
          <Avatar className="h-12 w-12">
            <AvatarImage src={user?.profilePhoto || ''} alt={user?.name} />
            <AvatarFallback className="text-md font-semibold">
              {initials}
            </AvatarFallback>
          </Avatar>

          <span className="hidden sm:block text-left">
            <span className="block text-lg font-semibold leading-none">
              {user?.name}
            </span>
          </span>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" aria-label="Open user menu">
              <ChevronDown className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            {menuItems.map((item) => (
              <DropdownMenuItem key={item.href} asChild>
                <Link href={item.href}>{item.label}</Link>
              </DropdownMenuItem>
            ))}

            <DropdownMenuSeparator />

            <DropdownMenuItem
              onClick={() => {
              }}
              className="gap-2"
            >
              <LogOut className="h-4 w-4" />
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

    </div>
  );
};