import { useState } from "react";
import { Time } from "./timer/time";

type TimerStatus = "idle" | "running" | "paused";

type CountdownTimerProps = {
  duration?: number;
};

export function CountdownTimer({ duration }: CountdownTimerProps) {
  const DEFAULT_DURATION = 25;
  const [status, setStatus] = useState<TimerStatus>("idle");
  const [seconds, setSeconds] = useState(0);
  const [minutes, setHours] = useState(duration ?? DEFAULT_DURATION);
  // const dateTimeValue = `PT25M00S`;

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (status === "idle" || status === "paused") {
      setStatus("running");
      // Start timer
    }

    if (status === "running") {
      setStatus("paused");
      // Pause timer
    }
  };

  const startPauseButtonText = status === "running" ? "Pause" : "Start";

  return (
    <form onSubmit={handleFormSubmit} data-testid="countdown-timer">
      <Time minutes={minutes} seconds={seconds} />

      <div>
        <button type="submit">{startPauseButtonText}</button>
        <button type="button">Reset</button>
      </div>
    </form>
  );
}
