import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const GuestActions: React.FC = () => {
  return (
    <div className="flex items-center gap-2">
      <Button asChild variant="outline" className="w-40.75 h-12 rounded-full">
        <Link href="/login" className='text-md font-bold'>Login</Link>
      </Button>
      <Button asChild className="w-40.75 h-12 rounded-full">
        <Link href="/register" className='text-md font-bold'>Register</Link>
      </Button>
    </div>
  );
};