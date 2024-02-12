import { CheckCircledIcon } from '@radix-ui/react-icons';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';

export default function Success({ className }: any) {
    return (
        <main>
            <div className={`${className} flex items-center justify-center`}>
                <div className="rounded-md bg-green-50 p-4 w-full">
                    <div className="flex">
                        <div className="flex-shrink-0">
                            <CheckCircledIcon
                                className="h-5 w-5 text-green-400"
                                aria-hidden="true"
                            />
                        </div>
                        <div className="ml-3 flex">
                            <p className="text-sm font-medium text-green-800">
                                You are now registered for EV Tech Day 2024
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {/* <section>
                <h2 className="flex justify-center mt-4 font-bold">
                    EV Tech Day FAQ:
                </h2>
                <div>
                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger>
                                Is it accessible?
                            </AccordionTrigger>
                            <AccordionContent>
                                Yes. It adheres to the WAI-ARIA design pattern.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger>
                                Is it accessible?
                            </AccordionTrigger>
                            <AccordionContent>
                                Yes. It adheres to the WAI-ARIA design pattern.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                            <AccordionTrigger>
                                Is it accessible?
                            </AccordionTrigger>
                            <AccordionContent>
                                Yes. It adheres to the WAI-ARIA design pattern.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </section> */}
        </main>
    );
}
