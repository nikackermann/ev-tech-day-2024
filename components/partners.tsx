'use client';

import LogoBlue from '@/public/logos/logo-blue.svg';
import WitelsLogo from '@/public/logos/witels-logo.png';
import ZeissLogo from '@/public/logos/zeiss-logo.png';
import HpwLogo from '@/public/logos/hpw-logo.png';
import BMLogo from '@/public/logos/bm-logo.png';
import BSLogo from '@/public/logos/bs-logo.jpg';
import SchulerLogo from '@/public/logos/schuler-logo.png';
import Image from 'next/image';
import { Disclosure, Transition } from '@headlessui/react';
import { ChevronRightIcon, ChevronUpIcon } from '@radix-ui/react-icons';

const partners = [
    {
        name: 'WAFIOS Machinary Corp.',
        logo: LogoBlue,
        width: 120,
        height: 100,
        description: `WAFIOS was established in 1893 and is today the world's
                    largest supplier of precision machinery for wire, tube and
                    formed parts. Headquartered in Reutlingen, Germanty, the
                    WAFIOS range of machine types include spring coiling and
                    forming, EV, spring end-grinding, wire bending and forming,
                    tube bending and forming, wire straightening, cutting and
                    end-working, as well as precision machines used to produce
                    fasteners and chains.
                    The WAFIOS North American headquarters is in Branford, Connecticut, with spare parts stock, service resources and machines available for demonstration. The Chicago-area Midwest Technical Center located in Mokena, Illinois provides additional resources as a service center, with machines available for trials and demonstration. Both facilities are structured to support application development, as well as provide customers with hands-on training programs. 
                    `,
    },
    {
        name: 'Witels-Albert USA',
        logo: WitelsLogo,
        width: 120,
        height: 100,
        description: `Witels Albert specializes in wire straighteners, tube
                    straighteners, wire and tube feeders and drive units, guides
                    and pre-formers for wire, tube, strip and flat wire, cable,
                    wire rope and profile shape. Our products are engineered and
                    produced in the German tradition of innovation, precision
                    and quality by Witels Albert Germany, and stocking here in
                    the US.`,
    },
    {
        name: 'Zeiss',
        logo: ZeissLogo,
        width: 60,
        height: 40,
        description: `ZEISS Industrial Quality Solutions is a leading manufacturer
        of multidimensional metrology solutions. These include
        coordinate measuring machines, 3D optical and multi-sensor
        systems, 3D X-ray technology, microscopy systems for
        industrial quality assurance as well as metrology software.
        The company is headquartered in Oberkochen, Germany with
        production and development sites located in Minneapolis,
        Shanghai and Bangalore.`,
    },
    {
        name: 'HPW (High Performance Wires)',
        logo: HpwLogo,
        width: 130,
        height: 40,
        description: `A leading manufacturer of magnet wires for e-mobility and is thus one of the key companies in a rapidly growing market. As a specialist for PEEK and PAI-enamel insulated copper flat wires, HPW is mass producing and supplying to numerous renowned European OEMs and Tier 1 manufacturers for several years. Approximately 20,000 metric tons are currently being produced in three Austrian production sites. HPW North America is currently being installed with initial operation in 2025, mass-producing PEEK insulated magnet wires for large North American OEMs.`,
    },
    {
        name: 'BROCKHAUS MEASUREMENTS',
        logo: BMLogo,
        width: 120,
        height: 40,
        description: `The worldwide market leader in magnetic testing technology, specializing in the characterization of magnets, electrical steel, and stators. We serve automotive customers around the globe as a trusted and reliable partner. Our mission is to reduce power loss, heat generation, and, in collaboration with the motor industry, improve the efficiency and range of electric vehicles.`,
    },
    {
        name: 'Balance Systems',
        logo: BSLogo,
        width: 110,
        height: 40,
        description: `Balance Systems srl is the world market leader in balancing
        technology, specializing in the construction of automatic
        machines for large volume production runs for balancing
        electric motors.`,
    },
    {
        name: 'Schuler North America',
        logo: SchulerLogo,
        width: 120,
        height: 40,
        description: `Schuler North America (Schuler), headquartered in Canton,
        Michigan, is the North American subsidiary of Schuler Group.
        Schuler provides new equipment, spare parts, and a portfolio
        of lifecycle services for all press systems—including
        preventative maintenance, press shop design and
        optimization, turnkey installations, retrofits for existing
        systems, and localized production and service. Schuler’s
        best-in-class position in the metalworking and materials
        industry serves automotive manufacturers and tier suppliers,
        as well as home appliance, electronics, forging, and other
        industries.`,
    },
];

export default function Partners() {
    return (
        <div className="flex flex-col h-full justify-between mt-3 mb-3 space-y-4">
            {partners.map((company) => (
                <div
                    key={company.name}
                    className="mx-auto w-full rounded-full bg-white"
                >
                    <Disclosure>
                        <Disclosure.Button className="flex w-full justify-between rounded-lg  px-2 py-2 text-left text-sm font-medium text-gray-900">
                            <span>{company.name}</span>
                            <ChevronRightIcon className="ui-open:rotate-90 ui-open:transform" />
                        </Disclosure.Button>
                        <Disclosure.Panel className="px-2 pb-2 pt-4 text-sm text-gray-500">
                            <Image
                                src={company.logo}
                                alt={`${company.name} logo`}
                                className="mb-4"
                                priority
                                width={company.width}
                                height={company.height}
                            />
                            <p>{company.description}</p>
                        </Disclosure.Panel>
                    </Disclosure>
                </div>
            ))}
        </div>
    );
}
