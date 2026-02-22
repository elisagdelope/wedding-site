import React from 'react';
import ReactCountdown, { CountdownRenderProps } from 'react-countdown';

interface CountdownProps {
  targetDate: string;
}

export const Countdown: React.FC<CountdownProps> = ({ targetDate }) => {
  const renderer = ({ days, hours, minutes, seconds, completed }: CountdownRenderProps) => {
    if (completed) {
      return <span className="font-serif text-2xl italic">¡Hoy es el gran día!</span>;
    }

    return (
      <div className="flex justify-center gap-3 sm:gap-6">
        <TimeUnit value={days} label="Días" />
        <TimeUnit value={hours} label="Horas" />
        <TimeUnit value={minutes} label="Min" />
        <TimeUnit value={seconds} label="Seg" />
      </div>
    );
  };

  return <ReactCountdown date={new Date(targetDate)} renderer={renderer} />;
};

const TimeUnit = ({ value, label }: { value: number; label: string }) => (
  <div className="flex flex-col items-center justify-center bg-olive shadow-sm border border-olive/20 rounded-xl w-20 h-24 sm:w-28 sm:h-32">
    <span className="font-serif text-3xl sm:text-5xl text-cream mb-1">
      {value.toString().padStart(2, '0')}
    </span>
    <span className="text-[8px] sm:text-[10px] uppercase tracking-[0.2em] text-cream/60 font-bold">
      {label}
    </span>
  </div>
);
