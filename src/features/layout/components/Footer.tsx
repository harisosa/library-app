'use client'

import Image from 'next/image'
import { Container } from '@/shared/components/layout'

type SocialItem = {
    label: string
    href: string
    icon: string
}

const SOCIALS: SocialItem[] = [
    { label: 'Facebook', href: '#', icon: '/icons/facebook.svg' },
    { label: 'Instagram', href: '#', icon: '/icons/instagram.svg' },
    { label: 'LinkedIn', href: '#', icon: '/icons/linkedin.svg' },
    { label: 'TikTok', href: '#', icon: '/icons/tiktok.svg' },
]

export const Footer = () => {
    return (
        <footer className="w-full bg-white">
            <Container>
                <div
                    className="
            flex flex-col items-center text-center
            py-14 md:py-20
          "
                >
                    <div className="flex items-center justify-center gap-3 relative w-[155px] h-[42px]">
                        <Image
                            src="/images/logo.svg"
                            alt="Booky"
                            fill
                            className="h-auto w-35 md:w-40"
                            priority={false}
                        />
                    </div>

                    <p
                        className="
              mt-6 max-w-130
              text-md font-semibold leading-6 text-neutral-700
              md:mt-5 md:max-w-190
            "
                    >
                        Discover inspiring stories &amp; timeless knowledge, ready to borrow anytime.
                        Explore online or visit our nearest library branch.
                    </p>

                    <div className="mt-8 text-base font-semibold text-neutral-900 md:mt-10">
                        Follow on Social Media
                    </div>

                    <div className="mt-5 flex items-center justify-center gap-4 md:mt-6">
                        {SOCIALS.map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                aria-label={item.label}
                                className="
                                inline-flex size-10 items-center justify-center
                                rounded-full border border-neutral-300 bg-white
                                transition hover:bg-neutral-50
                                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900/20"
                            >
                                <span className="relative block size-5 overflow-hidden">
                                    <Image
                                        src={item.icon}
                                        alt={item.label}
                                        fill
                                        className="object-contain"
                                    />
                                </span>
                            </a>
                        ))}
                    </div>
                </div>
            </Container>


            <div className="h-0.75 w-full bg-[#2F7DFF]" />
        </footer>
    )
}