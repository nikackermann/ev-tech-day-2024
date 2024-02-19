import Banner from '@/components/ui/banner';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import CountDown from '@/components/ui/countdown';
import { Logo, Logos } from '@/components/ui/logos';
import { RegisterForm } from '../components/register-form';
import { Badge } from '@/components/ui/badge';
import Partners from '@/components/partners';

export default function Home() {
    return (
        <main>
            <div className="lg:mb-22 mb-4 sm:mb-12 md:p-5 md:pl-10 md:pt-8 mt-6">
                <Logo />
            </div>
            <section>
                <div className="mx-auto mb-6 max-w-xl">
                    <div className="text-brandLight text-center text-xs font-light md:text-base lg:text-lg">
                        WAFIOS, with our partners invite you to the Second
                        Annual
                    </div>
                    <div className="mb-4 flex items-center justify-center">
                        <Banner />
                    </div>
                </div>
                <div className="text-brandLight mx-auto max-w-xl pb-6 text-center text-sm font-light leading-loose tracking-wide sm:text-base md:mb-4 md:mt-4 md:text-lg">
                    <Badge
                        className="text-brand-500 rounded-full bg-[#E9EFFF] px-5 py-2 text-sm"
                        variant="secondary"
                    >
                        MAY 7TH, 2024
                    </Badge>
                </div>
                <div className="mx-auto mb-4 max-w-xl">
                    <CountDown />
                </div>
                <div className="mb-14 flex min-h-[30vh] items-start justify-center">
                    <div className="flex w-full max-w-5xl flex-col gap-4 space-y-1 px-2 sm:flex-row sm:space-y-0">
                        <div className="order-2 w-full flex-grow sm:order-1 sm:w-1/2">
                            <Card className="">
                                <CardHeader className="-mb-3 text-lg font-bold uppercase">
                                    <h1>
                                        Event
                                        <mark className="bg-brand-500 ml-1 rounded-md p-1 px-1.5 text-white dark:bg-blue-500">
                                            partners
                                        </mark>
                                    </h1>
                                </CardHeader>
                                <CardContent>
                                    <Partners />
                                </CardContent>
                            </Card>
                        </div>
                        <div className="order-1 w-full flex-grow sm:order-2 sm:w-1/2 md:px-0">
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
