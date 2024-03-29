import { SignupsTable } from '@/components/signups-table';
import { fetchSignups } from '../actions';

export default async function Page() {
    const signups = await fetchSignups();
    return (
        <div className="bg-white">
            <div className="flex min-h-screen w-full flex-col px-4 py-6 md:px-6">
                <header className="mb-6">
                    <h1 className="text-3xl font-bold">EV Tech Day 2024</h1>
                    <p className="text-gray-500 dark:text-gray-400">
                        All current signups
                    </p>
                </header>
                <SignupsTable signups={signups} />
            </div>
        </div>
    );
}
