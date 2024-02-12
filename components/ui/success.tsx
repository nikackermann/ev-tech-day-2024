import { CheckCircledIcon } from '@radix-ui/react-icons';

export default function Success({ className }: any) {
    return (
        <div className={`${className} flex items-center justify-center`}>
            <CheckCircledIcon className="mr-3 mt-4 h-6 w-6" />
            <span className="mt-4">
                You are signed up for EV Tech Day 2024!
            </span>
        </div>
    );
}
