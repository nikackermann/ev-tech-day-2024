export default function Banner({ className }: any) {
    const bannerClass =
        'text-3xl sm:text-3xl md:text-7xl font-extrabold text-center bg-clip-text text-white p-2';

    return <h1 className={bannerClass}>EV Tech Day</h1>;
}
