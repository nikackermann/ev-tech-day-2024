import Banner from '@/components/ui/banner';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import CountDown from '@/components/ui/countdown';
import { Logo, Logos } from '@/components/ui/logos';
import { RegisterForm } from '../components/register-form';
import { Badge } from '@/components/ui/badge';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';
import Partners from '@/components/partners';

export default function Home() {
    return (
        <main className="relative min-h-screen bg-[url('/bg-gradient.svg')] bg-cover bg-fixed bg-center bg-no-repeat">
            <div className="lg:mb-22 mb-4 sm:mb-12 md:p-5 md:pl-10 md:pt-8">
                <Logo />
            </div>
            <section>
                <div className="mx-auto max-w-xl mb-6">
                    <div className="text-brandLight text-center text-xs font-light md:text-base lg:text-lg">
                        WAFIOS, with our partners invite you to the Second
                        Annual
                    </div>
                    <div className="flex items-center justify-center mb-4">
                        <Banner />
                    </div>
                </div>
                <div className="text-brandLight mx-auto pb-6 text-center text-sm font-light leading-loose tracking-wide sm:text-base md:mb-4 md:mt-4 md:text-lg max-w-xl">
                    <Badge
                        className="bg-[#E9EFFF] rounded-full px-5 py-2 text-sm text-brand-500"
                        variant="secondary"
                    >
                        MARCH 7TH, 2024
                    </Badge>
                </div>
                <div className="max-w-xl mx-auto mb-4">
                    <CountDown />
                </div>
                <div className="flex justify-center items-start min-h-[30vh] pt-8">
                    <div className="flex flex-col sm:flex-row max-w-4xl w-full space-y-1 sm:space-y-0 gap-4 px-2">
                        <div className="flex-grow w-full sm:w-1/2 order-2 sm:order-1">
                            <Card className="">
                                <CardHeader className="text-lg font-bold -mb-3 uppercase">
                                    <h1>
                                        Event
                                        <mark className="ml-1 p-1 px-1.5 text-white bg-brand-500 rounded-md dark:bg-blue-500">
                                            partners
                                        </mark>
                                    </h1>
                                </CardHeader>
                                <CardContent>
                                    <Partners />
                                </CardContent>
                            </Card>
                        </div>
                        <div className="flex-grow md:px-0 w-full sm:w-1/2 order-1 sm:order-2">
                            <Card>
                                <CardHeader>
                                    <Logos />
                                </CardHeader>
                                <CardContent>
                                    {/* <EventInfo /> */}
                                    <RegisterForm />
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
