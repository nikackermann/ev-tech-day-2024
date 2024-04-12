import Banner from '@/components/ui/banner'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import CountDown from '@/components/ui/countdown'
import { Logo, LogosTop, LogosBottom } from '@/components/ui/logos'
import { RegisterForm } from '../components/register-form'
import { Badge } from '@/components/ui/badge'
import Partners from '@/components/partners'
import { EventInfo } from '@/components/event-info'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import DaveF from '@/public/davef.webp'
import Image from 'next/image'

export default function Home() {
    return (
        <main className="min-h-screen bg-[url('/bg-gradient.svg')] bg-cover bg-fixed bg-no-repeat px-4 py-2">
            <div className="lg:mb-22 mx-auto mb-4 max-w-7xl sm:mb-12 md:p-5 md:pl-10 md:pt-8">
                <Logo />
            </div>
            <section>
                <div className="mx-auto mb-12 max-w-xl">
                    <div className="mb-4 flex items-center justify-center">
                        <Banner />
                    </div>
                    <div className="lg:text-md text-center text-xs font-light text-brandLight md:text-base">
                        Join us for the Second Annual EV Tech Day, proudly
                        hosted by WAFIOS and our partners.
                    </div>
                </div>
                <div className="mx-auto max-w-xl pb-6 text-center text-sm font-light leading-loose tracking-wide text-brandLight sm:text-base md:mt-4 md:text-lg">
                    <Badge
                        className="mb-4 rounded-full bg-[#E9EFFF] px-5 py-2 text-sm text-brand-500"
                        variant="secondary"
                    >
                        MAY 7TH, 2024
                    </Badge>
                </div>
                {/* <div className="mx-auto mb-6 max-w-xl lg:mb-0">
                    <CountDown />
                </div> */}
                <div className="md: mb-14 justify-center space-y-8 md:space-y-12">
                    <div className="mx-auto flex w-full max-w-xl flex-col md:px-0">
                        <Card className="flex flex-col">
                            <CardHeader>
                                <LogosTop />
                            </CardHeader>
                            <CardContent className="flex-grow">
                                {/* <EventInfo /> */}
                                <RegisterForm />
                            </CardContent>
                            <CardFooter>
                                <LogosBottom />
                            </CardFooter>
                        </Card>
                    </div>
                    <div className="mx-auto max-w-xl">
                        <Card className="flex flex-col">
                            <CardHeader className="-mb-3 px-7 text-lg font-bold uppercase">
                                <h1>
                                    Event
                                    <mark className="ml-1 rounded-md bg-brand-500 p-1 px-1.5 text-white dark:bg-blue-500">
                                        Agenda
                                    </mark>
                                </h1>
                            </CardHeader>
                            <CardContent className="flex-grow">
                                <EventInfo />
                            </CardContent>
                        </Card>
                    </div>
                    <div className="mx-auto max-w-xl">
                        <Card className="flex flex-col">
                            <CardHeader className="-mb-3 px-7 text-lg font-bold uppercase">
                                <h1>
                                    Event
                                    <mark className="ml-1 rounded-md bg-brand-500 p-1 px-1.5 text-white dark:bg-blue-500">
                                        Keynote
                                    </mark>
                                </h1>
                            </CardHeader>
                            <CardContent className="flex-grow pb-6 pt-8">
                                <div className="p-6dark:bg-gray-800 flex flex-col items-center gap-6">
                                    <h2 className="text-center text-2xl font-bold">
                                        The Evolution of Motor Manufacturing
                                        Technology
                                    </h2>
                                    <h3 className="text-center text-xl font-semibold">
                                        Dave Fulton
                                    </h3>
                                    <div className="flex h-32 w-32 items-center justify-center overflow-hidden rounded-full">
                                        <Image
                                            src={DaveF}
                                            alt="Dave Fulton"
                                            className="h-auto w-full object-cover"
                                        />
                                    </div>
                                    <p className="text-center text-gray-600 dark:text-gray-400">
                                        Dave Fulton is the Director of Electric
                                        Machine Innovation in BorgWarner
                                        PowerDrive Systems. In this role, he
                                        leads machine product & process
                                        technology development, to provide
                                        competitive advantage in electric and
                                        hybrid vehicle powertrains. Prior to
                                        joining BorgWarner, David spent more
                                        than 20 years at Remy International,
                                        where he held various engineering and
                                        management positions. He is
                                        inventor/co-inventor on 30 U.S. patents,
                                        a licensed professional engineer, and a
                                        member of SAE and IEEE. David received
                                        bachelor’s and master’s degrees in
                                        mechanical engineering from Valparaiso
                                        University and Northwestern University,
                                        respectively.
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                    <div className="mx-auto max-w-xl">
                        <Card className="flex flex-col">
                            <CardHeader className="-mb-3 px-7 text-lg font-bold uppercase">
                                <h1>
                                    Event
                                    <mark className="ml-1 rounded-md bg-brand-500 p-1 px-1.5 text-white dark:bg-blue-500">
                                        partners
                                    </mark>
                                </h1>
                            </CardHeader>
                            <CardContent className="flex-grow">
                                <Partners />
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>
        </main>
    )
}
