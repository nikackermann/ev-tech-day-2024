import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { RegisterForm } from '../components/register-form';
import { Logo, Logos } from '@/components/ui/logos';
import Banner from '@/components/ui/banner';
import EventInfo from '@/components/event-info';

export default function Home() {
    return (
        <main className="relative min-h-screen bg-[url('/bg-gradient.svg')] bg-cover bg-center bg-no-repeat">
            <div className="md:p-5 md:pl-10 md:pt-8 mb-4 sm:mb-12 lg:mb-22">
                <Logo />
            </div>
            <section className="mx-auto max-w-xl">
                <div>
                    <div className="text-center text-xs font-light text-brandLight md:text-base lg:text-lg">
                        WAFIOS, with our partners invite you to the Second
                        Annual
                    </div>
                    <div className="flex items-center justify-center">
                        <Banner />
                    </div>
                </div>
                <div className="text-center pb-6 pt-4 text-sm font-light leading-loose tracking-wide text-brandLight sm:text-base md:mb-6 md:mt-4 md:text-lg">
                    MAY 7, 2024
                </div>
                <div className="px-2 md:px-0">
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
            </section>
        </main>
    );
}
