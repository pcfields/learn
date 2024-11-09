type TimeProps = {
  minutes: number;
  seconds: number;
};

export function Time({ minutes, seconds }: TimeProps) {
  return (
    <time aria-live="polite" data-testid="timer">
      {formatTime(minutes, seconds)}
    </time>
  );
}

function formatTime(minutes: number, seconds: number) {
  const minutesAsString = minutes.toString().padStart(2, "0");
  const secondsAsString = seconds.toString().padStart(2, "0");

  const formattedTime = `${minutesAsString}:${secondsAsString}`;

  return formattedTime;
}
