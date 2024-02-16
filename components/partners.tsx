'use client';

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';
import LogoBlue from '@/public/logos/logo-blue.svg';
import WitelsLogo from '@/public/logos/witels-logo.png';
import ZeissLogo from '@/public/logos/zeiss-logo.png';
import HpwLogo from '@/public/logos/hpw-logo.png';
import BMLogo from '@/public/logos/bm-logo.png';
import BSLogo from '@/public/logos/bs-logo.jpg';
import SchulerLogo from '@/public/logos/schuler-logo.png';
import Image from 'next/image';

export default function Partners() {
    return (
        <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
                <AccordionTrigger>WAFIOS Machinary Corp.</AccordionTrigger>
                <AccordionContent id="item-1">
                    <Image
                        src={LogoBlue}
                        alt="WAFIOS Logo"
                        className="mb-4"
                        priority
                    />

                    <p className="mb-2">
                        {`WAFIOS was established in 1893 and is today the world's
                    largest supplier of precision machinery for wire, tube and
                    formed parts. Headquartered in Reutlingen, Germanty, the
                    WAFIOS range of machine types include spring coiling and
                    forming, EV, spring end-grinding, wire bending and forming,
                    tube bending and forming, wire straightening, cutting and
                    end-working, as well as precision machines used to produce
                    fasteners and chains.`}
                    </p>
                    <p>
                        The WAFIOS North American headquarters is in Branford,
                        Connecticut, with spare parts stock, service resources
                        and machines available for demonstration. The
                        Chicago-area Midwest Technical Center located in Mokena,
                        Illinois provides additional resources as a service
                        center, with machines available for trials and
                        demonstration. Both facilities are structured to support
                        application development, as well as provide customers
                        with hands-on training programs.
                    </p>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
                <AccordionTrigger>Witels Alebrt USA</AccordionTrigger>
                <AccordionContent>
                    <Image
                        src={WitelsLogo}
                        alt="Witels Logo"
                        className="mb-4"
                        width={112}
                        height={60}
                        priority
                    />
                    Witels Albert specializes in wire straighteners, tube
                    straighteners, wire and tube feeders and drive units, guides
                    and pre-formers for wire, tube, strip and flat wire, cable,
                    wire rope and profile shape. Our products are engineered and
                    produced in the German tradition of innovation, precision
                    and quality by Witels Albert Germany, and stocking here in
                    the US.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
                <AccordionTrigger>ZEISS</AccordionTrigger>
                <AccordionContent>
                    <Image
                        src={ZeissLogo}
                        alt="Zeiss Logo"
                        className="mb-4"
                        width={72}
                        height={60}
                        priority
                    />
                    ZEISS Industrial Quality Solutions is a leading manufacturer
                    of multidimensional metrology solutions. These include
                    coordinate measuring machines, 3D optical and multi-sensor
                    systems, 3D X-ray technology, microscopy systems for
                    industrial quality assurance as well as metrology software.
                    The company is headquartered in Oberkochen, Germany with
                    production and development sites located in Minneapolis,
                    Shanghai and Bangalore.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
                <AccordionTrigger>
                    HPW (High Performance Wires)
                </AccordionTrigger>
                <AccordionContent>
                    <Image
                        src={HpwLogo}
                        alt="HPW Logo"
                        className="mb-4"
                        width={140}
                        height={60}
                        priority
                    />
                    A leading manufacturer of magnet wires for e-mobility and is
                    thus one of the key companies in a rapidly growing market.
                    As a specialist for PEEK and PAI-enamel insulated copper
                    flat wires, HPW is mass producing and supplying to numerous
                    renowned European OEMs and Tier 1 manufacturers for several
                    years. Approximately 20,000 metric tons are currently being
                    produced in three Austrian production sites. HPW North
                    America is currently being installed with initial operation
                    in 2025, mass-producing PEEK insulated magnet wires for
                    large North American OEMs.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
                <AccordionTrigger>BROCKHAUS MEASUREMENTS</AccordionTrigger>
                <AccordionContent>
                    <Image
                        src={BMLogo}
                        alt="BM Logo"
                        className="mb-4"
                        width={120}
                        height={60}
                        priority
                    />
                    A leading manufacturer of magnet wires for e-mobility and is
                    thus one of the key companies in a rapidly growing market.
                    As a specialist for PEEK and PAI-enamel insulated copper
                    flat wires, HPW is mass producing and supplying to numerous
                    renowned European OEMs and Tier 1 manufacturers for several
                    years. Approximately 20,000 metric tons are currently being
                    produced in three Austrian production sites. HPW North
                    America is currently being installed with initial operation
                    in 2025, mass-producing PEEK insulated magnet wires for
                    large North American OEMs.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
                <AccordionTrigger>Balance Systems</AccordionTrigger>
                <AccordionContent>
                    <Image
                        src={BSLogo}
                        alt="Balance Systems Logo"
                        className="mb-4"
                        width={120}
                        height={60}
                        priority
                    />
                    Balance Systems srl is the world market leader in balancing
                    technology, specializing in the construction of automatic
                    machines for large volume production runs for balancing
                    electric motors.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-7">
                <AccordionTrigger>Schuler North America</AccordionTrigger>
                <AccordionContent>
                    <Image
                        src={SchulerLogo}
                        alt="Schuler Logo"
                        className="mb-4"
                        width={120}
                        height={60}
                        priority
                    />
                    Schuler North America (Schuler), headquartered in Canton,
                    Michigan, is the North American subsidiary of Schuler Group.
                    Schuler provides new equipment, spare parts, and a portfolio
                    of lifecycle services for all press systems—including
                    preventative maintenance, press shop design and
                    optimization, turnkey installations, retrofits for existing
                    systems, and localized production and service. Schuler’s
                    best-in-class position in the metalworking and materials
                    industry serves automotive manufacturers and tier suppliers,
                    as well as home appliance, electronics, forging, and other
                    industries.
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    );
}
