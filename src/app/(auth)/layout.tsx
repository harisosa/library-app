import * as React from "react";
import Link from "next/link";
import Image from "next/image";

type AuthLayoutProps = {
  children: React.ReactNode;
};



const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  return (
    <div className="w-full bg-background">
      <div className="mx-auto flex min-h-dvh w-full md:w-100 flex-col justify-center px-6 lg:px-0">
        <div className="mb-5 flex">
          <Link href="/">
            <div className="relative w-30 h-8.25">
              <Image
                src="/images/logo.svg"
                alt="bookly"
                fill
                className="object-contain"
                priority
              />
            </div>

          </Link>
        </div>

        {children}

      </div>
    </div>
  );
};

export default AuthLayout;