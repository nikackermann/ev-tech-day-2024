import Image from 'next/image';
import LogoWhite from '@/public/logos/logo-white.svg';
import PartnerLogos from '@/public/logos/partner-logos.webp';

export function Logo({ className }: any) {
    return (
        <div className="flex justify-center md:justify-start">
            <Image
                src={LogoWhite}
                alt="logo"
                width={120}
                height={80}
                className="mb-3 mt-3 transform transition duration-500 ease-in-out md:hidden" // Show this logo on mobile only
                priority
            />
            <Image
                src={LogoWhite}
                alt="logo"
                width={120}
                height={80}
                className="hidden transform transition duration-500 ease-in-out md:block" // Hide this logo on mobile
                priority
            />
        </div>
    );
}

export function Logos({ className }: any) {
    return (
        <div>
            <Image src={PartnerLogos} alt="Partner Logos" priority />
        </div>
    );
}
