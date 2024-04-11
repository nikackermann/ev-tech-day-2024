import Image from 'next/image'
import LogoWhite from '@/public/logos/logo-white.svg'
// import PartnerLogos from '@/public/logos/partner-logos.webp';
import LogoSpreadTop from '@/public/logos/logo-spread-top.webp'
import LogoSpreadBottom from '@/public/logos/logo-spread-bottom.webp'

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
    )
}

export function LogosTop({ className }: any) {
    return (
        <div>
            <Image src={LogoSpreadTop} alt="Partner Logos" priority />
        </div>
    )
}

export function LogosBottom({ className }: any) {
    return (
        <div>
            <Image src={LogoSpreadBottom} alt="Partner Logos" priority />
        </div>
    )
}
