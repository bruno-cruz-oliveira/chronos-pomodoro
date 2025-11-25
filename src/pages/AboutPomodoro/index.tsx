import { useEffect } from "react";
import Container from "../../components/Container";
import { GenericHtml } from "../../components/GenericHtml";
import Heading from "../../components/Heading";
import { RouterLink } from "../../components/RouterLink";
import MainTemplate from "../../templates/MainTemplate";

function AboutPomodoro() {
  useEffect(() => {
    document.title = "Understand the Pomodoro Technique - Chronos Pomodoro";
  }, []);

  return (
    <MainTemplate>
      <Container>
        <GenericHtml>
          <Heading>The Pomodoro Technique 🍅</Heading>

          <p>
            The Pomodoro Technique is a productivity methodology created by{" "}
            <strong>Francesco Cirillo</strong>, which consists of dividing work
            into time blocks (the famous "Pomodoros") interspersed with breaks.
            The goal is to maintain full focus for a short period and ensure
            rests to avoid mental fatigue.
          </p>

          <img src="https://placehold.co/1920x1080" alt="" />

          <h2>How does the traditional Pomodoro work?</h2>
          <ul>
            <li>
              <strong>1. Define a task</strong> you want to accomplish.
            </li>
            <li>
              <strong>2. Work on it for 25 minutes</strong> without
              interruptions.
            </li>
            <li>
              <strong>3. Take a short 5-minute break</strong>.
            </li>
            <li>
              <strong>4. Every 4 cycles, take a long break</strong> (usually 15
              to 30 minutes).
            </li>
          </ul>

          <h2>
            But <strong>Chronos Pomodoro</strong> has a unique twist 🚀
          </h2>

          <p>
            Our app follows the original concept, but with some improvements and
            customizations to make the process even more efficient:
          </p>

          <h3>⚙️ Time customization</h3>
          <p>
            You can configure the focus time, short break and long break however
            you want! Just go to the{" "}
            <RouterLink href="/settings/">settings page</RouterLink> and adjust
            the minutes as you prefer.
          </p>

          <h3>🔁 Cycles organized in sequence</h3>
          <p>
            After each completed cycle, a new task is automatically added to
            your history, and the app already suggests the next cycle (focus or
            break).
          </p>
          <p>
            <strong>Our default:</strong>
          </p>
          <ul>
            <li>
              Odd cycles: <strong>Work (focus)</strong>.
            </li>
            <li>
              Even cycles: <strong>Short break</strong>.
            </li>
            <li>
              Cycle <strong>8</strong>: Special long break, to reset the full
              cycle.
            </li>
          </ul>

          <h3>🍅 Cycle visualization</h3>
          <p>
            Right below the timer, you'll see colored dots representing the
            cycles:
          </p>
          <ul>
            <li>🟡 Yellow: Work cycle (focus).</li>
            <li>🟢 Green: Short break.</li>
            <li>🔵 Blue: Long break (appears every 8 cycles).</li>
          </ul>

          <p>
            That way, you always know which part of the process you're in and
            what's coming next. No need to write it down or do the math in your
            head!
          </p>

          <h3>📊 Automatic history</h3>
          <p>
            All your completed tasks and cycles are saved in the{" "}
            <RouterLink href="/history/">history</RouterLink>, with statuses of
            completed or interrupted. This lets you track your progress over
            time.
          </p>

          <h2>Why use Chronos Pomodoro?</h2>
          <ul>
            <li>✅ Organize your focus with clarity.</li>
            <li>✅ Work and rest in the right balance.</li>
            <li>✅ Customize your own cycles and durations.</li>
            <li>✅ Automatically track your history.</li>
          </ul>

          <p>
            <strong>Ready to focus?</strong> Let's go{" "}
            <RouterLink href="/">back to the homepage</RouterLink> and start
            your Pomodoros! 🍅🚀
          </p>

          <p>
            <em>"Full focus, no rush, no pause, just go!"</em> 💪🧘‍♂️
          </p>
        </GenericHtml>
      </Container>
    </MainTemplate>
  );
}

export default AboutPomodoro;
