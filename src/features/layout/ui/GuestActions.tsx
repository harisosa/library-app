import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Link from 'next/link';

type GuestActionsProps = {
  className?: string;
}

export const GuestActions: React.FC<GuestActionsProps> = ({ className }) => {
  return (
    <div className={cn(
      "flex items-center gap-2" ,
      className
    )}
    >
      <Button asChild variant="outline" className="w-40.75 h-12 rounded-full">
        <Link href="/login" className='text-md font-bold'>Login</Link>
      </Button>
      <Button asChild className="w-40.75 h-12 rounded-full">
        <Link href="/register" className='text-md font-bold'>Register</Link>
      </Button>
    </div>
  );
};