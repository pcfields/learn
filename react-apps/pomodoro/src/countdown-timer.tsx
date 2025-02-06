import { useRef, useState } from "react";
import { Time } from "./timer/time";

type TimerStatus = "idle" | "running" | "paused";

type CountdownTimerProps = {
  duration?: number; // duration in minutes
};

export function CountdownTimer({ duration }: CountdownTimerProps) {
  // const dateTimeValue = `PT25M00S`;
  const DEFAULT_DURATION = 3;
  const initialRemainingTime = duration ?? DEFAULT_DURATION;
  const timerDurationInSeconds = initialRemainingTime * 60;

  const timerIntervalRef = useRef<number | undefined>();
  const [status, setStatus] = useState<TimerStatus>("idle");
  const [remainingTime, setRemainingTime] = useState(timerDurationInSeconds);

  const minutes = Math.floor(remainingTime / 60);
  const seconds = remainingTime - minutes * 60;

  const startTimer = () => {
    setStatus("running");

    timerIntervalRef.current = setInterval(() => {
      console.log("Timer started", { timerDurationInSeconds, remainingTime });
      if (remainingTime == 0) {
      }

      setRemainingTime((remainingTime) => {
        console.log("state update: remainingTime", remainingTime);

        if (remainingTime > 1) {
          return remainingTime - 1;
        }

        return 0;
      });
    }, 1000);
  };

  const pauseTimer = () => {
    setStatus("paused");

    if (timerIntervalRef.current) clearInterval(timerIntervalRef.current);
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (status === "idle" || status === "paused") {
      startTimer();
    }

    if (status === "running") {
      pauseTimer();
    }
  };

  const handleResetTimer = () => {
    setRemainingTime(timerDurationInSeconds);
    setStatus("idle");

    if (timerIntervalRef.current) clearInterval(timerIntervalRef.current);
  };

  const startPauseButtonText = status === "running" ? "Pause" : "Start";

  return (
    <form onSubmit={handleFormSubmit} data-testid="countdown-timer">
      <Time minutes={minutes} seconds={seconds} />

      <div>
        <button type="submit">{startPauseButtonText}</button>
        <button type="button" onClick={handleResetTimer}>
          Reset
        </button>
      </div>
    </form>
  );
}
