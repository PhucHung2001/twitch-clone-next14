import { cn } from '@/lib/utils';
import { Poppins } from 'next/font/google';
import Image from 'next/image';
import React from 'react';
const font = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
});

const Logo = () => {
  return (
    <div className="flex flex-col items-center gap-y-4">
      <div className="bg-white rounded-full p-1">
        <Image src="/spooky.svg" height={80} width={80} alt="logo" />
      </div>
      <div className={cn('flex items-center flex-col', font.className)}>
        <p className={'text-xl font-semibold'}>GameHub</p>
        <p className={'text-sm text-muted-foreground'}>Let&apos;s play</p>
      </div>
    </div>
  );
};

export default Logo;
