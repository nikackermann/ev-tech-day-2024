import CountdownTimer from './timer';

export default function CountDown() {
    return (
        <div className="container mx-auto">
            <CountdownTimer targetDate="2024-5-7" />
        </div>
    );
}
