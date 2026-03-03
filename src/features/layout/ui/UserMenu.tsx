'use client';

import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { NAVBAR_DROPDOWN_MENU } from '@/features/layout/constants';
import { Button } from '@/components/ui/button';
import { NotificationButton } from '@/components/ui/notification';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { getInitials } from '@/lib/utils';
import { useMe } from '@/features/profile/hooks';
import { useDispatch } from 'react-redux';
import { useQueryClient } from '@tanstack/react-query';
import { logout } from '@/features/auth/store';
import { persistor } from '@/store/store';
import { useRouter } from 'next/navigation';


type UserMenuProps = {
  variant?: "desktop" | "mobilePanel";
  onNavigate?: () => void; // optional buat nutup panel mobile
};

export const UserMenu: React.FC<UserMenuProps> = ({ variant, onNavigate }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const queryClient = useQueryClient();

  const {data: me} = useMe();
  const user = me?.profile;
  const menuItems = NAVBAR_DROPDOWN_MENU.filter((m) => m.roles.includes(user?.role ?? 'USER'));
  const handleLogout = async () => {

    dispatch(logout());
    queryClient.clear();
    await persistor.purge();
    router.replace("/login");
  };
    if (variant === "mobilePanel") {
    return (
        <div className="space-y-2">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={onNavigate}
              className="block py-2 text-sm font-medium"
            >
              {item.label}
            </Link>
          ))}

          <div className="pt-2">
            <button
              type="button"
              onClick={handleLogout}
              className='text-md font-semibold gap-2 text-[#EE1D52]'
            >
              Logout
            </button>
          </div>
        </div>

    );
  }

  return (
    <div className="flex items-center gap-6">
      <NotificationButton />

      <div className="flex items-center gap-4.5">
        <div className="flex items-center gap-2">
          <Avatar className="h-12 w-12">
            <AvatarImage src={user?.profilePhoto || ''} alt={user?.name} />
            <AvatarFallback className="text-md font-semibold">
              {getInitials(user?.name)}
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
              <DropdownMenuItem key={item.href} asChild className='text-md font-semibold'>
                <Link href={item.href}>{item.label}</Link>
              </DropdownMenuItem>
            ))}

            <DropdownMenuItem className='text-md font-semibold gap-2 text-[#EE1D52]'
              onClick={handleLogout}
            >
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

    </div>
  );
};